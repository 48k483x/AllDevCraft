#include <stdio.h>
#include <math.h>
#include <string.h>

int main (){
    int age;
    printf("\nEnter Your Age : ");
    scanf("%d" , &age);

    if(age < 18){
        printf("You Cant Open AN Bank account");
    } else{
        printf("Loading");
    }
}