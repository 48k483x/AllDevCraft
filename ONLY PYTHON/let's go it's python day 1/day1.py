# /letters Miniscule or Majuscule\--------------------------------

#text = "Abdurrahman\nChahrour"
#print(text.upper().islower())

# /text identitor like if you choose it will tell you 
#the var place \\-------------------------------------------------

#text = "Abdurrahman\nChahrour"
#print(text[5])
#print(text.index("C"))

# \\ replace your text by another //-----------------------------

#text = "Abdurrahman\nChahrour"
#print(text.replace("Abdurrahman", "wilsa"))

# \\ math calcul //-----------------------------------------------

#from math import *
#print(sqrt(16))


# \\ input and you get the rsult //--------------------------------

#name = input("Enter your name: ")
#age = input("Enter your age: ")
#print("Hello "+name)
#print("Your age is " +age+ " years Old")


# \\ Create a calculator progmar //-----------------------------------

#from math import *
#n1 = input("enter the first num: ")
#n2 = input("enter the second num: ")
#result = float(n1) * float(n2)
#print(result)



# \\ Create a MADLIB progmar (game app) //-----------------------------------

#c = input("Enter a color: ")
#n = input("Enter a plural noun: ")
#adjective = input("Enter an adjective: ")##

#print("trees are "+c)
#print(n+" are mean")
#print("Please kepp it "+adjective)

# \\ Pyython Lists   by godzillaa//-----------------------------------
   #      basics 1
#c = ["exemple" , "Abdurrahman" , "python" , "programming"]
#print(c[0:2])
#print(c[0:])
#c[0] = "abduinza"
#print(c[0])
#      basics 2
#z = [5,4,52,25,255]
#c = ["exemple" , "Abdurrahman" ,"Abdurrahman", "python" , "programming"]
#c += z
#c.extend(z)
#c.pop
#c.append(50)
#c.insert(0, "manzakin")
#z.sort()
#print(z)



#print(c)


#print(c.count("Abdurrahman"))

#list_new = c.copy()
#print(list_new)
#print(c)


#         tuples    3
#cord = (25, 48, 18)
#list_of_tubles = [(2,3),(5,4),(2,8),(2,9)]
#print(list_of_tubles)


# \\ Pyython FUNCTIONS   by godzillaa//-----------------------------------
#   Functions 1

#def say_hi(name, age):
    #print("Hello "+name+ " Your age is "+str(age)+ " Years old")
    
#say_hi("abdurrahman", 18)


#   Functions 2

#def cube(num):
#    return num*num*num
    
#def sum(n1,n2):
 #   print("Hello your ansear is ")
#    return n1-n2

#print(sum(2, 4))



# if conditons-----------------------------------------------


#is_hungry = False
#wants_to_eat = True
#if is_hungry and wants_to_eat:
#    print("go eat")
#elif is_hungry and not wants_to_eat:
#    print("as you want bro")
#elif not is_hungry and wants_to_eat:
#    print("baga fuvk u")
#else:
#    print("do not eat")
    
    
    




# compareson

#def max_num(n1,n2,n3):
#    if n1 >= n2 and n1 >= n3:
#        return n1
#    elif n2 >= n3 and n2 >= n3:
#        return n2
#    else:
#        return n3
#print(max_num(50,2,3))
#print(max(2,5,56,20))

    
#   Second EXEMPLE------------------------
#def manza(s1, s2):
#    if s1 != s2:
#        print("is equal stringd abdu")
#    else:
#        print("enter and strings man cause its not \n equal man ")
#manza("abdu", "abdu")

#   full calcil progmmar EXEMPLE------------------------

#n1 = float(  input("enter your first number : "))
#calc_sign = input("Enter your Calc sign (+ , - , * , /) : ")
#n2 = float(input("Enter you second number : "))

#if calc_sign == "+":
#    print(n1 + n2)
#elif calc_sign == "*":
#    print(n1 * n2)
#elif calc_sign == "/":
#    print(n1 / n2)
#elif calc_sign == "-":
#    print(n1 - n2)    
#else:
#    print("try to enter a numbers and one operator")


#dic = {
#     0 : "janvier",
#     "feb" : "fabruary",
#     "mar" : ["march","manza",2,3,"maza"]
    
#}
#print(dic.get("mar","the key dosent exist"))

#i = 1
#while i <= 10:
#    i += 1 
#    if i == 6:
#        break
#    print(i) 
#else:
#    print("the cindition is not true")
    
#print("the loop hase ended")    

