# This does the same thing but imports the Abstract Class
# Note: Name the file (AbstractClass5) and the class
# that you want to import.

from AbstractClass5 import AbstractClassExample

class DoAdd42(AbstractClassExample):

    def do_something(self):
        return self.value + 42
    
class DoMul42(AbstractClassExample):
   
    def do_something(self):
        return self.value * 42
    
x = DoAdd42(10)
y = DoMul42(10)

print(x.do_something())
print(y.do_something())