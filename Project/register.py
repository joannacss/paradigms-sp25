from django.contrib.auth.hashers import check_password, make_password
from django.core.exceptions import ValidationError
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from .models import User

def register(request):
    if request.POST:
        # Create a model instance and populate it with data from the request
        uname = request.POSt["username"]
        pwd = request.POST["password"]
        email = request.POST["email"]

        user = User(username=uname, password=pwd, email=email)

        try:
            user.full_clean()
            user.password = make_password(pwd)  # encrypts
            # if we reach here, the validation succeeded
            user.save()  # saves on the db
            # redirect to the login page
            return HttpResponseRedirect(reverse('polls:login'))
        except ValidationError as e:
            pass # do something with it, as you wish
        return HttpResponseRedirect(reverse('polls:index'))