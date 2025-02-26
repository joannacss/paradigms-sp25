class int:
    def __init__(self, x):
        self.x = x
    # obj1 + obj2
    def __add__(self, obj):
        return self.x - obj.x

a = int(1)
b = int(2)
print(a + b)