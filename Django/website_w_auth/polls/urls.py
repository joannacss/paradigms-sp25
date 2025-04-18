from django.urls import path

from . import views

app_name = 'polls'
urlpatterns = [
    # ex: /polls/5/
    path('<int:pk>/', views.QuestionDetailView.as_view(), name='detail'),
    # ex: /polls/5/results/
    path('<int:pk>/results/', views.ResultsView.as_view(), name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
    # ex: /polls/login or /polls/logout
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('register/', views.register, name='register'),
    # ex: /polls/
    path('', views.IndexView.as_view(), name='index'),
]
