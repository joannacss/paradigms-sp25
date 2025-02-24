class Person:
    population = 0  # static field, tracks how many instances were created

    def __init__(self, name, age):
        self.name = name    # Instance field
        self.age = age      # Instance field
        Person.population += 1  # Increment population count everytime the constructor is invoked

    def introduce(self):  # Instance method
        """Instance method that uses 'self' to access instance fields (attributes)."""
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")


    @staticmethod
    def is_adult(age):  # Static method
        """Static methods do not have access to an instance."""
        return age >= 18


if __name__ == '__main__':
    # Creating instances of Person
    person1 = Person("Alice", 30)
    person2 = Person("Bob", 15)
    print(Person.population)
    person1.introduce()
    print(Person.population)
    print(Person.is_adult(person1.age))

    # # Calling an instance method
    # person1.introduce()  # Output: Hi, my name is Alice and I am 30 years old.
    #
    # # Accessing a static attribute
    # print(Person.population)  # 2
    #
    # # Calling a static method
    # print(Person.is_adult(20))  # Output: True
    # print(Person.is_adult(16))  # Output: False
