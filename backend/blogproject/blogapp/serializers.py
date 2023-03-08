from rest_framework.serializers import ModelSerializer
from .models import Blog, Users


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description']


class UsersSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = ['name', 'username', 'email', 'password']
