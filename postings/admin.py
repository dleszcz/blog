from django.contrib import admin

from .models import BlogPost

admin.site.site_header = 'dblog admin panel'

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'user', 'timestamp')


admin.site.register(BlogPost, BlogPostAdmin)
