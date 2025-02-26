import math

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    #TODO: implement methods
    def magnitude(self):
        return math.sqrt(self.x*self.x + self.y*self.y)

    def __add__(self, obj):
        return Vector(self.x + obj.x, self.y + obj.y)
    # obj1 * obj2
    def __mul__(self, other):
        return self.x*other.x + self.y*other.y
    def __str__(self):
        return f"({self.x}, {self.y})"



u = Vector(3,4)
v = Vector(-5,10)

print(u.x) # 3
print(u.y) # 4
print(u.magnitude()) # 5.0
print(u + v) # <-2,14>
print(u * v) # 25
