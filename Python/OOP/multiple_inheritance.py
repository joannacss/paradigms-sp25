from pathlib import Path

from animal import Cow


class Vocalizer:
    def speak(self):
        class_name = self.__class__.__name__
        try:
            from playsound import playsound
            playsound(Path(f'./sound/{class_name}.mp3'))
        except:
            print('You likely forgot to run `pip install playsound PyObjC`')
        return f"What does the {class_name} say? {self.sound()}"


class EvilCow(Vocalizer, Cow):
    def sound(self):
        return "moo ha ha mwahaha"


if __name__ == '__main__':
    c = EvilCow('Bessie')
    print(EvilCow.mro())
    print(c.speak())  # conflict: what the output should be in here?


# TODO: demo 2: multiple inheritance
# class ConfusedCat(Vocalizer, Animal):
#     def sound(self):
#         return "uh?"
# cat = ConfusedCat("Kratos")
# print(cat.speak())  # conflict: what the output should be in here?
# print(ConfusedCat.mro())
