from django.contrib.auth.models import User, Group
from tweets.models import Tweet
from rest_framework import viewsets
from rest_framework import generics, permissions
from tweets.serializers import UserSerializer, GroupSerializer, TweetSerializer
from rest_framework import generics
from .serializers import TweetSerializer
from django.http import JsonResponse
from .models import Tweet


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


class TweetList(generics.ListAPIView):
    # Get all tweets, limit = 20
    queryset = Tweet.objects.order_by('created_at').reverse().all()[:20]
    serializer_class = TweetSerializer


class TweetAdd(generics.CreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class TweetDetailAndUpdate(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class TweetDelete(generics.DestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


def tweetLikeAdd(request, tweet_id):
    # Get requested tweet
    tweet = Tweet.objects.get(id=tweet_id)

    # Add count
    new_like_count = tweet.like_count + 1
    tweet.like_count = new_like_count

    # Save
    tweet.save()

    return JsonResponse({'result': 'successful'})


def tweetLikeSubtract(request, tweet_id):
    # Get requested tweet
    tweet = Tweet.objects.get(id=tweet_id)

    # Subtract count
    new_like_count = tweet.like_count - 1
    tweet.like_count = new_like_count

    # Save
    tweet.save()

    return JsonResponse({'result': 'successful'})
