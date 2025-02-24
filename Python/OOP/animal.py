class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f'{self.name} says {self.sound()}'


class Cow(Animal):
    def sound(self):
        return 'moooo'


class Horse(Animal):
    def sound(self):
        return 'neigh'


class Sheep(Animal):
    def sound(self):
        return 'baaaa'


if __name__ == '__main__':
    animals = [ Cow('Bessie'), Sheep('Little Lamb')]
    for a in animals:
        print(a.speak())
