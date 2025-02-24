# Python program showing 
# abstract base class work 
from abc import ABC, abstractmethod


class Polygon(ABC):
    @abstractmethod
    def num_sides(self):
        print("hello parent")


class Triangle(Polygon):
    def num_sides(self):
        print("I have three sides")


class Pentagon(Polygon):
    # overriding abstract method 
    def num_sides(self):
        print("I have 5 sides")


class Hexagon(Polygon):
    # overriding abstract method 
    def num_sides(self):
        print("I have 6 sides")


# Driver code
if __name__ == '__main__':
    list = []
    list.append(Triangle())
    list.append(Pentagon())
    list.append(Hexagon())

    number = 0;
    for shape in list:
        shape.num_sides()
