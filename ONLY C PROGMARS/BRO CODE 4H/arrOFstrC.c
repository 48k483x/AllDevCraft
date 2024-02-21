#include <stdio.h>
#include <string.h>
int main(){

    char cars[][10] = {"BMW" , "AUDI" , "PORSHE" ,"BENZ"};
    strcpy(cars[0] , "TESLA");
    for( int i = 0 ; i < sizeof(cars)/sizeof(cars[0]) ; i++){
        printf("%s\n" , cars[i]);
    }
}