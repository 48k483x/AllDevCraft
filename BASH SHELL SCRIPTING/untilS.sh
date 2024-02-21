#!/bin/bash
i=0

until (( $i == 10))
do
	(( i++ ))
	
	echo $i
	sleep 1
done

