def fizzBuzz(max_num):
    fizzbuzz = []
    buzz = []
    fizz = []
    other = []
    for x in range(1, max_num):
        if(x % 15 == 0): fizzbuzz.append(x)
        elif(x % 5 == 0): buzz.append(x)
        elif(x % 3 == 0): fizz.append(x)
        else: other.append(x) 
    print('fizzbuzz: ', fizzbuzz)
    print('buzz', buzz)
    print('fizz', fizz)
    print('other', other)

fizzBuzz(100)