from django.db import models

# Create your models here.


class Question(models.Model):
    question_text = models.CharField(max_length=500)
    pub_date = models.DateTimeField()
    def __str__(self):
        return self.question_text
class Choice(models.Model):
    question_id =  models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=500)
    votes = models.IntegerField()


