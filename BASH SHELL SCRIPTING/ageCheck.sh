#!/bin/bash

read -p "ENTER YOUR AGE : " user_age
if (($user_age < 18))
then
    echo "You are a minor."

elif (($user_age >=18)) && (($user_age < 65 )) 
then  
    echo "You are an adult"
else echo "You are a senior citizen."

fi
