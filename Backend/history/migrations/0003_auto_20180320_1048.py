# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-03-20 10:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('history', '0002_history_related'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='observations',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]