# Generated by Django 4.1.7 on 2023-03-04 07:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0004_users_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='email',
            field=models.EmailField(max_length=254, null=True, unique=True),
        ),
    ]
