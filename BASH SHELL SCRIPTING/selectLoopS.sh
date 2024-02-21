#!/bin/bash
#
select average in 20 40 60 80 100
do
	case $average in 
	20)
		echo "$average : your mark is passable"
	       	break	;;
	40)
		echo "$average : your grade is good"
	       	break	;;
	60) 
		echo "$average : your mark is quite good "
	       	break	;;
	80)
		echo "$average : your grade is very good "
	       	break	;;
	100)
		echo "$average : your grade is excellent "
	       	break	;;
	*)
	        echo "This $average not in [0-100]"
		continue
		;;
			
	esac	
done
