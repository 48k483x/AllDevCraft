#!/bin/bash
fs=('Yahya' 'Taha' 'Amine' 'walou' 'w')
echo ${fs[0]}

fs[3]="Moughit"

echo ${fs[3]}

length=${#fs[@]}
echo $length

all=${fs[@]}
echo $all

index=${!fs[@]}
echo $index

unset fs[4]

echo ${fs[@]}
