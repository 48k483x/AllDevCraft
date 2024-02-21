#!/bin/bash
#echo $1 $2 $3 ' > this arg1 $1 arg2 $2 arg3 $3'

args=("$@")
echo ${args[0]} ${args[1]} ${args[2]}