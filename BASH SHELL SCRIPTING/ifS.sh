#!/bin/bash

read -p 'ENTER AN NUMBER : ' user_num
if (($user_num > 0))
then
    echo "THE NUMBER ENTERED IS POSITIVE"
else
    echo "THE NUMBER ENTERED IS NEGATIVE"
fi