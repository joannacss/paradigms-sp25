class Student:
	name = "Default" # static attribute

	# default constructor
	def __init__(self):
		self.name = "Anonymous"

	# parameterized constructor
	def __init__(self, name):
		self.name = name

	# prints the name
	def print_student(self):
		print(self.name)

obj1 = Student("Alice")
obj2 = Student()
