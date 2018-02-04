from django.conf import settings
from django.db import models
from rest_framework.reverse import reverse as api_reverse
from ckeditor.fields import RichTextField

import os


class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class BlogPost(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=80, null=True, blank=True)
    lead = models.CharField(max_length=160, null=True, blank=True)
    hero = models.FileField()
    content = RichTextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    category = models.ManyToManyField(Category)

    def model_callable(self):
        return self.category.name

    def __str__(self):
        return str(self.user.username)

    @property
    def owner(self):
        return self.user

    def get_api_url(self, request=None):
        return api_reverse("api-postings:post-rud", kwargs={'pk': self.pk}, request=request)

    def get_hero_url(self, request=None):
        if not self.hero.name:
            return ""

        if request.is_secure():
            protocol = 'https://'
        else:
            protocol = 'http://'

        return protocol + request.get_host() + '/' + settings.MEDIA_URL + os.path.basename(self.hero.name)
