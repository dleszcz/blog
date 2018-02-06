from rest_framework import serializers
from postings.models import BlogPost, Category
from pprint import pprint


class BlogPostSerializer(serializers.ModelSerializer):
    url = serializers.SerializerMethodField(read_only=True)
    hero = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = BlogPost
        fields = [
            'url',
            'id',
            'user',
            'title',
            'hero',
            'lead',
            'content',
            'timestamp',
            'categories',
        ]

        read_only_fields = ['id', 'user']

    def get_url(self, obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

    def get_hero(self, obj):
        request = self.context.get("request")
        return obj.get_hero_url(request=request)

    def validate_title(self, value):
        qs = BlogPost.objects.filter(title__iexact=value)
        if self.instance:
            qs = qs.exclude(pk=self.instance.id)
        if qs.exists():
            raise serializers.ValidationError("This title has already been used")
        return value


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
        ]

        read_only_fields = ['id']
