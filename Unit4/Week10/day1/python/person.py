class Person:
  def __init__(self, name):
    self.name = name

  def greeting(self):
    print('Hi, I\'m', self.name)

salva = Person('Salva')
salva.greeting()
