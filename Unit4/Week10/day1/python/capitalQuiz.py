import random  # Import random module of python

def quiz():    # Function defnition. Initially display the welcome message and define the dicitonary of state name and corresponding capital names. 
  print('----------------------------------------------')
  print(' America is the best country in United States')
  print('----------------------------------------------')
  state_capitals={'Washington':'Olympia','Oregon':'Salem','California':'Sacramento','Ohio':'Columbus','Nebraska':'Lincoln','Colorado':'Denver','Michigan':'Lansing','Massachusetts':'Boston','Florida':'Tallahassee','Texas':'Austin','Oklahoma':'Oklahoma City','Hawaii':'Honolulu','Alaska':'Juneau','Utah':'Salt Lake City','New Mexico':'Santa Fe','North Dakota':'Bismarck','South Dakota':'Pierre','West Virginia':'Charleston','Virginia':'Richmond','New Jersey':'Trenton','Minnesota':'Saint Paul','Illinois':'Springfield','Indiana':'Indianapolis','Kentucky':'Frankfort','Tennessee':'Nashville','Georgia':'Atlanta','Alabama':'Montgomery','Mississippi':'Jackson','North Carolina':'Raleigh','South Carolina':'Columbia','Maine':'Augusta','Vermont':'Montpelier','New Hampshire':'Concord','Connecticut':'Hartford','Rhode Island':'Providence','Wyoming':'Cheyenne','Montana':'Helena','Kansas':'Topeka','Iowa':'Des Moines','Pennsylvania':'Harrisburg','Maryland':'Annapolis','Missouri':'Jefferson City','Arizona':'Phoenix','Nevada':'Carson City','New York':'Albany','Wisconsin':'Madison','Delaware':'Dover','Idaho':'Boise','Arkansas':'Little Rock','Louisiana':'Baton Rouge'}
  playMore = 'yes'                            # Initialize playMore flag
  while(playMore == 'yes'):                   # Game is replayable as long as player chooses
    wrong=[]                                  # Initialize collecting wrong guesses
    states = list(state_capitals.keys())      # Store state names from the dicitonary
    random.shuffle(states)                    # Shuffle the order of states in the list for each round
    for x in range(0,len(states)):            # Loop through all 50 US states
      question = f'Q{x+1}. Capital of {states[x]} is '      # Concatenate question string
      choices = random.sample([state for state in states if state != states[x]],4)  # Sample 4 random states (excluding the state for which capital is being guessed in this round) whose capitals will be answer choices
      for y in range(0,4):                                                  # Loop through 4 selected states
        choices[y] = f'({ y + 1 }) { state_capitals[choices[y]] }'          # Replace the state name with capital name
      correct = random.randint(0,3)                                         # Randomly select an index to be the correct answer
      choices[correct] = f'({ correct + 1 }) { state_capitals[states[x]] }' # Overwrite the choice of the index with correct answer
      question += ', '.join(choices) + ': '                                 # Concatenate and format answer strings
      userInput = int(input(question))        # Ask the question in multiple choice form
      if (userInput == correct+1):    # If the user guesses correctly 
        print('You chose wisely.')    # Notify the user's wise choice
      else:                           # Otherwise notify the user's poor choice
        print('You chose poorly. The correct answer is',choices[correct],'.')
        wrong.append(states[x])       # And log the incorrect attempts
    print(f'Your score is {len(states) - len(wrong)}/{len(states)}')  # Display the user's score
    playMore = input('Would you like to play more? (yes/no)')       # Ask the user's intent to play more

quiz()