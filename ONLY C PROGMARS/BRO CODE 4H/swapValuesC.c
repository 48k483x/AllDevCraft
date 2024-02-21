#include <stdio.h>
#include <string.h>

int main (){
    char s[15];
    char x[25] = "water";
    char y[25] = "lemon";
    strcpy(s,x);
    strcpy(x,y);
    strcpy(y,s);
    printf("x : %s\ny : %s\n" , x , y);
}