#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(){
    srand(time(0));
    int MIN = 0;
    int MAX = 100;
    int guess;
    printf("Enter You Guess Number : ");
    scanf("%i" , &guess);

    int rnum = ( rand() % MAX ) +MIN ;

    if(guess == rnum){
        printf("Nice guess , You Get The Right Number\n");
    }else{
        printf("OOps , Too Close Try Again......\n");
    }
    printf("%i\n", rnum);
    
}