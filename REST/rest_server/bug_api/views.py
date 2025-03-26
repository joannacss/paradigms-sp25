from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import CommentSerializer, BugSerializer
from .models import Bug, Comment


class BugViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bugs to be viewed or edited.
    """
    queryset = Bug.objects.all().order_by('id')
    serializer_class = BugSerializer
    # permission_classes = [permissions.IsAuthenticated]


class CommentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows comments to be viewed or edited.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    # permission_classes = [permissions.IsAuthenticated]