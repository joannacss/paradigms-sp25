from django.db import models


class Bug(models.Model):
	package = models.CharField(max_length=200)
	status = models.CharField(max_length=200)
	version = models.CharField(max_length=200)
	summary = models.TextField(max_length=200)


class Comment(models.Model):
	bug = models.ForeignKey(Bug, on_delete = models.CASCADE)
	user = models.CharField(max_length=200)
	content = models.TextField()	
	
	def __str__(self):
		return f"{self.user}: {self.content}"