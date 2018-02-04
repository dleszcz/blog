from django.contrib import admin

from .models import BlogPost, Category

admin.site.site_header = 'dblog admin panel'


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category, CategoryAdmin)


class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'lead', 'user', 'timestamp')


admin.site.register(BlogPost, BlogPostAdmin)
