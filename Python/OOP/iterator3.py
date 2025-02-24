class Count:

    #Iterator that counts upward forever.

    def __init__(self, start=0):
        self.num = start

    def __iter__(self):
        return self

    def __next__(self):
        num = self.num
        self.num += 1
        return num


c = Count()
print(next(c))
print(next(c))
print(next(c))
