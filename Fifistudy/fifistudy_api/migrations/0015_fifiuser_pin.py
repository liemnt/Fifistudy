# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-27 08:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0014_auto_20171027_1048'),
    ]

    operations = [
        migrations.AddField(
            model_name='fifiuser',
            name='pin',
            field=models.CharField(blank=True, max_length=8, null=True),
        ),
    ]
