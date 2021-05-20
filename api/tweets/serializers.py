from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Tweet


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class TweetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields = ['user', 'body', 'image', 'like_count',
                  'created_at']
