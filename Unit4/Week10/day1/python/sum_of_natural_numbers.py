def sonn(max_num):
    total = 0    
    for x in range(1, max_num):
        if(x % 15 == 0 or x % 5 == 0 or x % 3 == 0): total += x
    return total

print(sonn(1000))