class even_range:
    def __init__(self, n):
        self.i = 0
        self.n = n

    def __iter__(self): # creates the iterable object
        return self

    def __next__(self): # invoked at every iteration
        if self.i <= self.n:
            i = self.i
            self.i += 2
            return i
        else:
            raise StopIteration() # stops iteration

# iterates over the range using an iterable object
for x in even_range(10):
	print(x)


def even_range_generator(n):
	i = 0
	while i <= n:
		yield i
		i += 2


# iterates over the range created using a generator object
for x in even_range_generator(10):
	print(x)