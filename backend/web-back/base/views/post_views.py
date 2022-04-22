from rest_framework import viewsets
from ..serializers import PostSerializer, CommentSerializer
from ..models import Post, Comment


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class CommentViewSet(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
