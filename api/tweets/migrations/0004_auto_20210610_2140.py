# Generated by Django 3.2.2 on 2021-06-10 16:10

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_remove_tweet_like_count'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tweet',
            options={},
        ),
        migrations.RemoveField(
            model_name='tweet',
            name='user',
        ),
        migrations.AddField(
            model_name='tweet',
            name='like_count',
            field=models.PositiveIntegerField(blank=True, default=0, verbose_name='Like Count'),
        ),
        migrations.AddField(
            model_name='tweet',
            name='name',
            field=models.CharField(db_index=True, default='Anonymous', max_length=14, verbose_name='Name'),
        ),
        migrations.AddField(
            model_name='tweet',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Updated Datetime'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='body',
            field=models.CharField(db_index=True, max_length=140, verbose_name='Body'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Created Datetime'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='tweet',
            name='image',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image'),
        ),
        migrations.AlterModelTable(
            name='tweet',
            table='tweet',
        ),
    ]
