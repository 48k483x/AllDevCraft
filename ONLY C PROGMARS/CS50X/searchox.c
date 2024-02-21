#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main (void)
{
    string arrayox[] = {"abdu" ,"omar" , "yahya" ,"sanda5" , "mou4itox" , "tahaox"};
    string s = get_string("String: ");
    for(int i = 0 ; i < 6 ; i++)
    {
        if(  strcmp(arrayox[i] , s) == 0  )
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;
}