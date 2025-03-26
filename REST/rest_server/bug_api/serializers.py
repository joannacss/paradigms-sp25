from rest_framework import serializers
from .models import Comment, Bug



class BugSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bug
        fields = ['id', 'package', 'status', 'summary']


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','bug','user', 'content']