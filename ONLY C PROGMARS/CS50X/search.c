#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main (void)
{
    int arrayox[] = {20,50,66,120,64,789,12,22,15,47,25,96,26};
    int num = get_int("Number: ");
    for(int i = 0 ; i < 13 ; i++)
    {
        if(arrayox[i] == num)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;
}