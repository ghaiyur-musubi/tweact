from django.db import models

# Create your models here.
"""
user - FK
body - CharField - max L 255
created_at - DateTimeField
"""

from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField
import cloudinary

# Create your models here.


class Tweet(models.Model):
    class Meta(object):
        db_table = 'tweet'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=14, db_index=True, default='Anonymous'
    )
    body = models.CharField(
        'Body', blank=False, null=False, max_length=140, db_index=True
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
    like_count = models.PositiveIntegerField(
        'Like Count', default=0, blank=True
    )
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
