from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from tweets import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tweets.urls'))
]
