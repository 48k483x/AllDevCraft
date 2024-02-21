#!/bin/bash

read -p 'Enter An Number : ' n
i=0

while (( "n" <= 10 ))
do
	echo "$n is less or equal to 10"
	(( n++ ))
	sleep 1
	x-terminal-emulator -e /bin/bash &

done
