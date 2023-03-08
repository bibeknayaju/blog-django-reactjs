from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200, null=True)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # image = models.ImageField(upload_to='media/')
    # created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Users(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=40, null=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.name
