from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CreateUser, ProfileViewSet, PostViewSet, CommentViewSet


router = DefaultRouter()
router.register('profiles', ProfileViewSet)
router.register('posts', PostViewSet)
router.register('comments', CommentViewSet)

urlpatterns = [
    path('user/create', CreateUser.as_view()),
    path('', include(router.urls)),
]
