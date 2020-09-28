# Зверюшка со свойствами

class Critter(object):
    """Виртуальный питомец"""
    def __init__(self, name):
        print("Появилась на свет новая зверюшка.")
        self.__name = name

    @property
    def name(self):
        return self.__name