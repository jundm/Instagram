from django.shortcuts import render
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from .models import Post
from .serializers import PostSerializer


class PostViewSet(ModelViewSet):  #crud가 들어간 api를 만들어 주는거임
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]  # FIXME: 인증 적용
