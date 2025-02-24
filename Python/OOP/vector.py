import math

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def magnitude(self):
        return math.sqrt(self.x * self.x + self.y * self.y)

    def __add__(self, v):
        return Vector(self.x + v.x, self.y + v.y)

    def __mul__(self, v):
        return self.x * v.x + self.y * v.y

    def __str__(self):
        return '<{},{}>'.format(self.x, self.y)


u = Vector(3,4)
v = Vector(-5,10)

print(u.x) # 3
print(u.y) # 4
print(u.magnitude()) # 5.0
print(u == v) # <-2,14>
print(u * v) # 25
