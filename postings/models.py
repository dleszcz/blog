from django.conf import settings
from django.db import models
from rest_framework.reverse import reverse as api_reverse
from ckeditor.fields import RichTextField

import os

class File(models.Model):
    file = models.FileField()

    def filename(self):
        return os.path.basename(self.file.name)

class BlogPost(models.Model):
    # pk -> numbers
    user        = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #
    title       = models.CharField(max_length=80, null=True, blank=True)
    lead        = models.CharField(max_length=160, null=True, blank=True)
    hero        = models.FileField()
    content     = RichTextField()
    timestamp   = models.DateTimeField(auto_now_add=True)

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

        if (request.is_secure()):
            protocol = 'https://'
        else :
            protocol = 'http://'

        return protocol + request.get_host() + '/' + settings.MEDIA_URL + os.path.basename(self.hero.name)