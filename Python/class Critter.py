# Моя зверюшка

class Critter(object):
    """Виртуальный питомец"""
    def __init__(self, name, hunger = 0, boredom = 0):
        self.name = name
        self.hunger = hunger
        self.boredom = boredom
    
    def __pass_time(self):
        self.hunger += 1
        self.boredom += 1

    @property
    def mood(self):
        unhappiness = self.hunger + self.boredom
        if unhappiness < 5:
            m = "прекрасно"
        elif 5 <= unhappiness <= 10:
            m = "неплохо"
        elif 11 <= unhappiness <= 15:
            m = "не сказать чтобы хорошо"
        else:
            m = "ужасно"
        return m 
    
    def talk(self):
        print("Меня зовут", self.name, ", и сейчас я чувствую себя", self.mood, "сейчас\n")

    def eat(self):
        food = int(input("Сколько еды желаете дать зверюшке? "))
        print("Мррр... Спасибо!")
        self.hunger -= food
        if self.hunger < 0:
            self.hunger = 0
        self.__pass_time()

    def play(self):
        fun = int(input("Сколько часов желаете провести со зверюшкой? "))
        print("Уиии!")
        self.boredom -= fun
        if self.boredom < 0:
            self.boredom = 0
        self.__pass_time()

    def indicators(self):
        print("Имя зверюшки: ", self.name)
        print("Голод: ", self.hunger)
        print("Скука: ", self.boredom)


def main():
    crit_name = input("Как вы назовёте свою зверюшку? ")
    crit = Critter(crit_name)

    choice = None  
    while choice != "0":
        print \
        ("""
        Моя зверюшка
    
        0 - Выйти
        1 - Узнать о самочувствии зверюшки
        2 - Покормить зверюшку
        3 - Поиграть со зверюшкой
        4 - Показатели зверюшки
        """)
    
        choice = input("Ваш выбор: ")
        print()

        # exit
        if choice == "0":
            print("До свидания.")

        # listen to your critter
        elif choice == "1":
            crit.talk()
        
        # feed your critter
        elif choice == "2":
            crit.eat()
         
        # play with your critter
        elif choice == "3":
            crit.play()

        # secret menu
        elif choice == "4":
            crit.indicators()


        # some unknown choice
        else:
            print("\nИзвините, в меню нет пункта ", choice)

main()
("\n\nPress the enter key to exit.") 




