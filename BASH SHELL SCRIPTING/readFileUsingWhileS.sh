#!/bin/bash

#while read p
#do
#	echo $p
#done < caseS.sh
#
#

#cat caseS.sh | while read p
#do
#	echo $p
#
#done
#



while IFS= read -r line
do 
	echo $line
done < z
