#include <stdio.h>
#include <cs50.h>
#include<ctype.h>
#include <string.h>

int main(void)
{
   string s = get_string("Before: ");
   printf("After: ");

   for( int i = 0 ; i < strlen(s) ; i++ )
   {
    printf("%c" , toupper(s[i]));
   }
   printf("\n");
}