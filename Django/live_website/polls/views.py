from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse

from .models import Question, Choice
from django.views.generic import ListView, DetailView


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

# TODO: implement the backend view classes/functions for the 4 features
class HomeView(ListView):
    template_name = 'polls/list_questions.html'
    context_object_name = "questions"

    # query latest 5 questions
    def get_queryset(self):
        return Question.objects.order_by('-pub_date')[:5]

class QuestionView(DetailView):
    model = Question
    template_name = 'polls/detail.html'


def vote(request, pk):
    question = get_object_or_404(Question, pk=pk)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))

class ResultsView(DetailView):
    model = Question
    template_name = "polls/results.html"
