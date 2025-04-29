from django.contrib.auth.hashers import check_password, make_password
from django.core.exceptions import ValidationError
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from django.views.generic import ListView, DetailView
from .models import Question, Choice, User


def index(request):
    context = {
        "course": "CSE-30332",
        "semester": "Spring 2024",
    }
    return render(request, "polls/index.html", context)


class IndexView(ListView):
    template_name = "polls/index.html"
    context_object_name = "latest_question_list"

    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by("-pub_date")[:5]

class QuestionDetailView(DetailView):
    model = Question
    template_name = "polls/detail.html"

class ResultsView(DetailView):
    model = Question
    template_name = "polls/results.html"

def vote(request, question_id):
    # make sure it is authenticated, if not authenticated, send to log-in page
    if request.session.get("user", None) is None:
        return HttpResponseRedirect(reverse("polls:login"))
    question = get_object_or_404(Question, pk=question_id)
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

## ADDED FOR BLOG APP: LOGIN / LOGOUT
# https://stackoverflow.com/a/43793754
def login(request):
    errors = None
    if request.POST:
        # Create a model instance and populate it with data from the request
        uname = request.POST["username"]
        pwd = request.POST["password"]
        user = User.objects.filter(username=uname)

        if len(user) > 0 and check_password(pwd, user[0].password):
            # create a new session
            request.session["user"] = uname
            return HttpResponseRedirect(reverse('polls:index'))
        else:
            errors = [('authentication', "Login error")]

    return render(request, 'polls/login.html', {'errors': errors})

def logout(request):
    # remove the logged-in user information
    del request.session["user"]
    return HttpResponseRedirect(reverse("polls:login"))

