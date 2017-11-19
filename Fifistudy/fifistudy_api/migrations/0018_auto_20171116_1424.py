# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-16 07:24
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('fifistudy_api', '0017_auto_20171109_2218'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='category_id',
        ),
        migrations.AddField(
            model_name='blog',
            name='category_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='fifistudy_api.Category'),
            preserve_default=False,
        ),
    ]
