#!/bin/bash

read -p 'Enter Vehicule Name : ' vehicule
	case $vehicule in
		"car")
			echo "Rent of this $vehicule is for 100$" ;; 
		"truck")
			echo "Rent of this $vehicule is for 200$" ;;
		"bycycle")
			echo "Rent of this $vehicule is for 5$" ;;
		"van")
			echo "Rent of this $vehicule is for 150$" ;;
	* )
			echo "Unknown Vehicule" ;;
	esac
	
	


