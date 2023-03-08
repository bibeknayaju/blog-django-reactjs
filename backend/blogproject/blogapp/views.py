# from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import BlogSerializer, UsersSerializer
from .models import Blog
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse


# Create your views here.


@api_view(['GET'])
def getRoutes(request):

    routes = [


        {
            'Endpoint': '/allblogs/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of blogs'
        },
        {
            'Endpoint': '/blog/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single blog object'
        },
        {
            'Endpoint': '/createblog/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new blog with data sent in post request'
        },
        {
            'Endpoint': '/blog/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing blog with data sent in post request'
        },
        {
            'Endpoint': '/blog/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting blog'
        },
    ]
    return Response(routes)


@api_view(['GET'])
def getBlog(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createBlog(request):
    serializer = BlogSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getBlogDetail(request, pk):
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response("You delete the blog")


@api_view(['PUT'])
def updateBlog(request, pk):
    try:
        blog = Blog.objects.get(id=pk)
    except Blog.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    # Pass request data to serializer
    serializer = BlogSerializer(instance=blog, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# for signup page
@api_view(['POST'])
def SignupPage(request):
    serializer = UsersSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def LoginPage(request):

    # Get user credentials from request data
    email = request.data.get('email')
    password = request.data.get('password')
    print("Email:", email, "Password:", password)

    # # Authenticate user by email and password
    user = authenticate(request=request, email=email, password=password)
    print(user)
    # return HttpResponse("Wrong username or password")
    # If user is authenticated, create or get token and return user data
    if user:
        token = Token.objects.get_or_create(user=user)
        print("This is token brother", token)
        serializer = UsersSerializer(user, fields=(
            'name', 'username', 'email', 'password'))
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)

    # If user is not authenticated, return error response
    return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
