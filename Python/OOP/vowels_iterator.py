class vowels:
    def __init__(self, s):
        self.i = 0
        self.word = s

    def __iter__(self): # creates the iterable object
        return self

    
    def __next__(self): # invoked at every iteration
        
        while self.i < len(self.word):
            i = self.i
            self.i += 1
            if self.word[i].lower() in ['a','e','i','o','u']:
                return self.word[i]
        else:
            raise StopIteration() # stops iteration



if __name__ == '__main__':
    for v in vowels('Jane'):
        print(v)

# iterator = vowels('Joanna Cecilia da Silva Santos')
# print(iterator.__next__())
# print(iterator.__next__())