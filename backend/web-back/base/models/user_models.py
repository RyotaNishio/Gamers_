from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.crypto import get_random_string
import os


def create_id():
    return get_random_string(length=10)


def get_user_image_path(instance, filename):
    extends = filename.split('.')[-1]
    return os.path.join('user', f"{instance.id}.{extends}")


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)


class User(AbstractBaseUser):
    id = models.CharField(default=create_id, primary_key=True, max_length=10)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    data_joined = models.DateTimeField(auto_now_add=True)
    following = models.ManyToManyField("self", blank=True, related_name="followed_by", symmetrical=False)
    username = models.CharField(max_length=20)
    bio = models.TextField(default='', blank=True, max_length=150)
    birthday = models.DateField(blank=True, null=True)
    img = models.ImageField(blank=True, null=True, upload_to=get_user_image_path,
                            default='user/l_e_others_500.png')

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin
