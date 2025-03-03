import os

from animal import Animal
from animal import Cow


class Vocalizer:
    def speak(self):
        class_name = self.__class__.__name__
        print(f"What does the {class_name} say?")
        try:
            from playsound import playsound
            current_dir = os.path.dirname(os.path.realpath(__file__))
            playsound(os.path.join(current_dir, 'sound', f'{class_name}.mp3'))
        except:
            print('You likely forgot to pip install playsound PyObjC')
        return self.sound()


class EvilCow(Vocalizer, Cow):
    def sound(self):
        return "moo ha ha mwahaha"


class ConfusedCat(Vocalizer, Animal):
    def sound(self):
        return "uh?"


if __name__ == '__main__':
    c = EvilCow('Bessie')
    print(c.speak())  # conflict: what the output should be in here?
    print(EvilCow.mro())

    cat = ConfusedCat("Kratos")
    print(cat.speak()) # conflict: what the output should be in here?
    print(ConfusedCat.mro())
