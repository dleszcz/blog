from django.db.models import Q
from rest_framework import generics, mixins
from postings.models import BlogPost
from .serializers import BlogPostSerializer
from .permissions import IsOwnerOrReadOnly

class BlogPostAPIView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field            = 'pk'
    serializer_class = BlogPostSerializer
    #queryset = BlogPost.objects.all()

    def get_queryset(self):
        queryset = BlogPost.objects.all()
        query = self.request.GET.get("q")

        if query is not None:
            queryset = queryset.filter(
                Q(title__icontains=query)|
                Q(content__icontains=query)
            ).distinct()
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class BlogPostRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field            = 'pk'
    serializer_class = BlogPostSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return BlogPost.objects.all()

    # def get_object(self):
    #     pk = self.kwargs.get("pk")
    #     return BlogPost.objects.get(pk=pk)