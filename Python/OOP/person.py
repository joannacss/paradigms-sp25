
class Person:
    # TODO: static field, tracks how many instances were created
    population = 0 # static field : 0

    # TODO: constructor that increments population count everytime the constructor is invoked
    def __init__(self, name, age):
        self.name = name
        self.age = age
        Person.population += 1

    # TODO: instance method introduce (f"Hi, my name is NAME and I am AGE years old.")
    def introduce(self):
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")

    # TODO: static method show_population ("POPULATION instance(s) were created so far.")
    @staticmethod
    def show_population():
        print(f"{Person.population} instance(s) were created so far.")

if __name__ == '__main__':
    print(Person.population)
    Person.show_population()

    # # TODO: Create two instances of Person
    # p1 = Person("Jane", 30)
    # p2 = Person("Alice", 15)
    # print(Person.population) # ?
    # print(p1.population)  # ?
    # # TODO: Call the  instance method introduce()
    # p1.introduce()
    #
    #
    # # TODO: Access the static attribute
    #
    #
    #
    # # TODO: Call the static method
    # p1.show_population()


