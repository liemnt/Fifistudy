# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-21 06:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0002_auto_20171021_1310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
