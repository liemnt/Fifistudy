# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-22 05:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0004_auto_20171022_1056'),
    ]

    operations = [
        migrations.AddField(
            model_name='film',
            name='view_number',
            field=models.IntegerField(default=0),
        ),
    ]
