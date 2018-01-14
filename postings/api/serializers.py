from rest_framework import serializers
from postings.models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer): #forms.ModelForm
    class Meta:
        model = BlogPost
        fields = [
            'id',
            'user',
            'title',
            'content',
            'timestamp',
        ]

        read_only_fields = ['id', 'user']

    # converts to JSON
    # validations for data passed

    def validate_title(self, value):
        qs = BlogPost.objects.filter(title__iexact=value)
        if self.instance:
            qs = qs.exclude(id=self.instance.id)
        if qs.exists():
            raise serializers.ValidationError("This title has already been used")
        return value