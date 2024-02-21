#!/bin/bash
echo "Hello ABDURRAHMAN"
echo $BASH
echo My SHELL Version Is $BASH_VERSION
echo $HOME
echo $PWD

name=ABDURRAHMAN 
age=19
echo my name is $name and my age is $age

echo "What's your NAMES : "
read 
echo "The entered Names is : $REPLY "

read -p 'username : ' user_value
read -sp 'password : ' pass

echo  Secsussfully login and this ur pass $pass
echo "ENTER NAMES : "
read -a names
echo "THE ARRAY OF NAMES IS ${names[0]} ${names[1]} ${names[2]} ${names[3]}"
