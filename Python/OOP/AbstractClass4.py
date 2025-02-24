# This creates an error because we didn't overide abstract methods
from abc import ABC, abstractmethod
 
class AbstractClassExample(ABC):

    def __init__(self, value):
        self.value = value
        super().__init__()
    
    @abstractmethod
    def do_something(self):
        pass
		
class DoAdd42(AbstractClassExample):
    pass

x = DoAdd42(4)

