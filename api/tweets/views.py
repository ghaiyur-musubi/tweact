from django.contrib.auth.models import User, Group
from .models import Tweet
from rest_framework import viewsets
from rest_framework import permissions
from tweets.serializers import UserSerializer, GroupSerializer, TweetSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class TweetViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be Tweets or edited.
    """
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer
    permission_classes = [permissions.IsAuthenticated]
