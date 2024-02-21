#!/bin/bash

read -p "ENTER FILE NAME : " filename

if [ -e $filename  ] && [ -r $filenam  ] ; then
    echo "File exists and is readable."
else 
    echo "File does not exist or is not readable."
fi


