# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2018-01-09 09:44
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0022_auto_20180101_1134'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('result', models.FloatField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('episode_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fifistudy_api.Episode')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fifistudy_api.FifiUser')),
            ],
        ),
    ]
