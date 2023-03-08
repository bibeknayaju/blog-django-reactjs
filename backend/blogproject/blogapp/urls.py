from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='Blog-overview'),
    path('allblogs/', views.getBlog, name='allblogs'),
    path('createblog/', views.createBlog, name='create-blog'),
    path('signup/', views.SignupPage, name='create-user'),
    path('login/', views.LoginPage, name='create-user'),
    path('blog/<str:pk>/', views.getBlogDetail, name='get-blog'),
    path('blog/<str:pk>/delete/', views.deleteBlog, name='delete-blog'),
    path('blog/<str:pk>/update/', views.updateBlog, name='update-blog'),
]
