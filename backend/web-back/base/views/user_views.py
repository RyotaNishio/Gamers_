from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny
from ..serializers import UserSerializer, ProfileSerializer
from ..models import Profile


class CreateUser(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (AllowAny,)
