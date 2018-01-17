from django.contrib import admin

from .models import BlogPost

admin.site.register(BlogPost)
admin.site.site_header = 'dblog admin panel'
