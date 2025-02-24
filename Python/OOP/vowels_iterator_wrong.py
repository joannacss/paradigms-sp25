# # WRONG example of iterator implementation
# class vowels:
#     def __init__(self, word):
#         self.i = 0
#         self.results = list(filter(lambda x: vowels.is_vowel(x), list(word)))
#         # The line above is the declarative-style for the imperative code below
#         # for x in word: 
#         #     if vowels.is_vowel(x): 
#         #         self.results.append(x)

#     def __iter__(self): # creates the iterable object
#         return self

#     @staticmethod
#     def is_vowel(letter):
#         return letter.lower() in ['a','e','i','o','u']

#     def __next__(self): # invoked at every iteration
#         if self.results:
#             return self.results.pop(0)  # NOT a proper iterator implementation
#                                         # because the results are PRE-computed, rather than being on-demand
#         else:
#             raise StopIteration() # stops iteration



# WRONG example of iterator implementation
class vowels:
    def __init__(self, word):
        self.i = 0
        self.results = []
        for x in word: 
            if x in ['a','e','i','o','u']: 
                self.results.append(x)

    def __iter__(self): # creates the iterable object
        return self

    def __next__(self): # invoked at every iteration
        if self.results:
            return self.results.pop(0)  # NOT a proper iterator implementation
                                        # because the results are PRE-computed, rather than being on-demand
        else:
            raise StopIteration() # stops iteration

for v in vowels('Joanna'):
    print(v)



