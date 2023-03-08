from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('', views.getRoutes, name='Blog-overview'),
    path('blogs/', views.getBlog, name='allblogs'),
    path('createblog/', views.createBlog, name='create-blog'),
    # path('signup/', views.SignupPage, name='create-user'),
    # path('login/', views.LoginPage, name='create-user'),
    path('blog/<str:pk>/', views.getBlogDetail, name='get-blog'),
    path('blog/<str:pk>/delete/', views.deleteBlog, name='delete-blog'),
    path('blog/<str:pk>/update/', views.updateBlog, name='update-blog'),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
