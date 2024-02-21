#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void){
    string s1 = get_string("s1: ");
    string s2 = get_string("s2: ");

    if(strcmp(s1 , s2) == 0)
    {
        printf("Same!!\n");
    }else
    {
        printf("Not Same!!\n");
    }
}