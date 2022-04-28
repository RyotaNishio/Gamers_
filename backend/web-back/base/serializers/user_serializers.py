from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from base.models import User, Post
from . import PostSerializer


class UserSerializer(serializers.ModelSerializer):
    user_posts = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'id', 'email', 'password', 'username', 'bio', 'birthday', 'img', 'following', 'followed_by', 'favorited',
            'user_posts',
        )

    def get_user_posts(self, obj):
        user_posts = PostSerializer(Post.objects.all().filter(user=obj), many=True).data
        return user_posts

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)
        # Add custom claims
        return token
