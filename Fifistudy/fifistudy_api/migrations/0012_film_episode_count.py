# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-26 01:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0011_auto_20171025_1530'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='episode_count',
            field=models.IntegerField(default=0),
        ),
    ]
