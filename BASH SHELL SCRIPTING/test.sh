#!/bin/bash

echo -e "Enter the name of your file : \c"
read filename

if [ -f $filename ] 
then
	if [ -w $filename ]
	then
		echo "type anytext you want , ctrl+d to quite "
		cat >> $filename
	else
		echo "File hav not the write permission"
	fi
else
	echo "File exist not or not regular"
fi 
