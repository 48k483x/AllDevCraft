#include <stdio.h>
#include <math.h>

int main(){
    char grade;
    printf("\nEnter Your Grade : ");
    scanf("%c" , &grade);

    switch(grade){
        case 'A' :
            printf("\nPerfect\n");
            break;
        case 'B' : 
            printf("\nOOPS , Not Perfect\n");
            break;
        default : 
            printf("Enter an A or B Grade!!!\n");
            
    }

}