# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-23 08:25
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0006_authuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fifiuser',
            name='address',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
    ]
