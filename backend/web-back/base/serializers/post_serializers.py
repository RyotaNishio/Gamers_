from rest_framework import serializers
from base.models import Post, Comment


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id', 'user', 'body', 'img', 'liked', 'post_comments')


class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'post', 'user', 'body', 'liked')
