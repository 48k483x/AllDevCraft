#!/bin/bash
#
usage(){
	echo " You need to provide an arg"
	echo " usage : $0 file_name "
}

file(){
	
	local filename="$1"
	[[  -f "$filename"  ]] && return 0 || return 1
}	
	[[  $# -eq 0  ]] && usage
	
        if ( file "$1" )
	then
		echo "file found"
	else
		echo "file not found"
	fi
