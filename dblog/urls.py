from django.conf.urls import url, include
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^', admin.site.urls),
    url(r'^api/auth/login/$', admin.site.urls),
    url(r'^api/postings/', include('postings.api.urls', namespace='api-postings')),
]