def calculator():
  operator = input('What operation? (+,-,*,/)')    
  
  if(operator not in ['+','-','*','/']): print("I have never heard of that one..")
  else: 
	  num1 = eval(input('Enter 1st number: '))
	  num2 = eval(input('Enter 2nd number: '))
	  if(operator == '+'): print(num1, ' + ', num2, ' = ', num1 + num2)
	  elif(operator == '-'): print(num1, ' - ', num2, ' = ', num1 - num2)
	  elif(operator == '*'): print(num1, ' * ', num2, ' = ', num1 * num2)
	  else: print(num1, ' / ', num2, ' = ', num1 / num2)

calculator()
