import random

top_of_range = input("Type a number: ")


if top_of_range.isdigit():
    top_of_range = int(top_of_range)
    if top_of_range <= 0 :
        print("Please type a number >> 0")
        quit()
        
else :
        print("type a dejet bro")
        quit()


r = random.randint(0, top_of_range)
print(r)


while True :
    user = input("make a guess")