#include <stdio.h>
#include<cs50.h>
int main(void)
{
    int x = get_int("Enter X ! : ");
    int y = get_int("Enter Y ! : ");

    if (x < y)
    {
        printf("x is less than y\n");
    }
    else if (x > y)
    {
        printf("x is more than y\n");
    }
    else
    {
        printf("x is equal to y\n");
        
    }
}