#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main (void)
{
    string names[] = {"abdurrahman" , "yahya"};
    string numbers[] = {"+212-699-1931-95" , "+212 671-7111-14"};
    string s = get_string("Name: ");

    for(int i = 0; i<2 ; i++)
    {
        if(strcmp(names[i] , s ) == 0)
        {
            printf("Found %s \n" , numbers[i]);
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;

}