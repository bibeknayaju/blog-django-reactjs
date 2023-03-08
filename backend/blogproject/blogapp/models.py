from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
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
