from django.urls import path
from . import views

app_name = 'polls'

urlpatterns = [
   path('index', views.index),
   # TODO: add URL bindings for the 4 features
   # polls/<pk>/
   path('<int:pk>/', views.QuestionView.as_view(), name='detail'),
   # polls/<pk>/vote/
   path('<int:pk>/vote/', views.vote, name='vote'),

   # polls/<pk>/results/
   path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
   # polls/
   path('', views.HomeView.as_view()),

]