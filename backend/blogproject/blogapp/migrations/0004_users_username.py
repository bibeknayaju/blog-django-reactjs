# Generated by Django 4.1.4 on 2023-03-03 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0003_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='username',
            field=models.CharField(max_length=40, null=True),
        ),
    ]