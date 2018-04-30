def fib():
	fib0 = 0
	fib1 = 1
	n = input('Which N-th Fibonacci would you like?')
	for x in range(1,int(n)):
		fib2 = fib0 + fib1
		fib0 = fib1
		fib1 = fib2
	return fib1
	
print(fib())