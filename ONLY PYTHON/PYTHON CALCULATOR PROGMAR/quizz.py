print("Welcome to my first quize game ")

palying = input("Do you want to play? (y/n): ")


if palying.lower() != "y":
    quit("Godd bye :((")
    
    
print("Okay!! --> let's Play our amazing quizz game  :)")
score = 0

answer = input("Who is best player in the world (Cr7 / Messi): ")

if answer.lower() == "cr7" : 
        print("Correct 1/4")
        score += 1
else:
    print("Incorrect!!:(")
    
    
answer = input("His prime and favorite team: ")

if answer.upper() == "Real" : 
        print("Correct 2/4")
        score += 1
else:
    print("Incorrect!!:(")
    
answer = input("How many Ballon d'or had: ")

if answer == str(5) : 
        print("Correct 3/4")
        score += 1
else:
    print("Incorrect!!:(")
    

answer = input("Hi's famous rival: ")

if answer.lower() == "Messi" : 
        print("Correct 4/4")
        score += 1
else:
    print("Incorrect!!:(")
    
    print("You got "+str(score)+ " Questions correct!!")
    

    

    

    
    