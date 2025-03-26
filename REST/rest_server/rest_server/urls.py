from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from bug_api import views

router = routers.DefaultRouter()
router.register(r'bugs', views.BugViewSet)
router.register(r'comments', views.CommentViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls), # to enable the admin interface
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]