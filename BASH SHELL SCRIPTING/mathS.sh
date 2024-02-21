#!/bin/bash
x=18
y=2
echo $( expr $x \* $y )
echo $( expr $x - $y  )
echo $( expr $x + $y  )
echo $( expr $x / $y  )
echo $( expr $x % $y  )


echo "5.5 + 5" | bc
echo "5.5 - 5" | bc
echo "5.5 * 5" | bc
echo "scale=1 ; 3/ 2" | bc
echo "5.5 % 5" | bc

echo "scale=2;sqrt (8)" | bc -l
echo " 3^3" | bc -l
