#!/bin/bash

read -p 'Enter a single Char : ' char

case $char in
	[A-Z] )
		echo "The Char entered is on [A-Z]" ;;
	[a-z] )
		echo 'The char Entered is on [a-z]' ;;
	[0-9] ) 
		echo "The Char entered is one [0-9]" ;;
	? ) 
		echo "Matches a string with exactly one character like a, !,...";;
	* ) 
echo   "Matches a string with one or more characters (a nonempty string).";;

esac
