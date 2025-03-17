from django.http import HttpResponse
from django.shortcuts import render
from .models import Question
# Create your views here.
def index(request):
    # return HttpResponse('Hello')
    questions = Question.objects.all()

    return render(request,
                  template_name='index.html',
                  context={
                      'name': 'Joanna',
                      'questions': questions
                  })