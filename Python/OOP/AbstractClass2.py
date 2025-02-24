# Create an ordinary class
# Create a subclass B.
# No complaints that you haven't overridden
# do_something

class AbstractClass:  
    def do_something(self):
        pass
       
class B(AbstractClass):
    pass

a = AbstractClass()
b = B()


