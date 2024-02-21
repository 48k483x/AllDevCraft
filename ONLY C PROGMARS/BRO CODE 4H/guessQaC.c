#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main (){
    char Questions[][100] = {"1. Wich Year Abdu Born ? :",
                             "2. What is my intrets ? :",
                             "3. What's My Nickname ? :"};
    
    char options[][100] = {"A. 2004", "B. 2000", "C. 1999",
                           "A. FOOTBALL","B. VIDEO GAMES","C. PROGRAMMING",
                           "A. ABKABEX","B. XPRO","C. AMBOLA"};
    
    char answers[3] = {'A','C','A'};
    
    int numberOfQa = sizeof(Questions)/sizeof(Questions[0]);
    char guess;
    int score =0 ;
    for (int i = 0 ; i < numberOfQa ; i++){
        printf("%s\n", Questions[i]);
        
        for(int j = (i*3) ; j < (i*3) +3 ; j++){
            printf("%s\n",options[j]);
        }

        printf("Guess :");
        scanf(" %c", &guess);

        if(toupper(guess) == answers[i]){
            printf("CORRECT !! \n");
            score++;

        }else {
            printf("INCORRECT !! \n");
       
        }
        
    }
         printf("Your final score is: %i/%i\n", score, numberOfQa);

}
