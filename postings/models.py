from django.conf import settings
from django.db import models
from rest_framework.reverse import reverse as api_reverse
from ckeditor.fields import RichTextField

class BlogPost(models.Model):
    # pk -> numbers
    user        = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) #
    title       = models.CharField(max_length=80, null=True, blank=True)
    lead        = models.CharField(max_length=160, null=True, blank=True)
    content     = RichTextField()
    timestamp   = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user.username)

    @property
    def owner(self):
        return self.user

    def get_api_url(self, request=None):
        return api_reverse("api-postings:post-rud", kwargs={'pk': self.pk}, request=request)