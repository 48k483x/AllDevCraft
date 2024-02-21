import random


user_wins = 0
comp_wins = 0

opt =  ["m9ass", "war9a", "7ajra"]

while True:
    user_input = input("Type m9ass/war9a/7ajra or Q to quite: ").lower()
    if user_input == "q":
        quit( "Good Bye :("  )
    if user_input not in opt:
        continue
    
    random_num = random.randint(0,2)
    # m9ass: 1  , war9a: 2 ,    7ajra: 3 
    comp_guess = opt[random_num]
    print("computer picked ,  comp_guess" + ".")
    
    if user_input == "7ajra" and comp_guess == "m9ass" : 
        print("You won!!")
        user_wins += 1
        
    
    elif user_input == "m9ass" and comp_guess == "war9a" : 
        print("You won!!")
        user_wins += 1
        
    
    elif user_input == "war9a" and comp_guess == "7ajra" : 
        print("You won!!")
        user_wins += 1
        
    else:
        print("You Lose ")
        comp_wins += 1


    print("You won" , user_wins, "times.")   
    print("The comp win ", comp_wins, "times.")    
    print("Good Bye :)")
        
    
