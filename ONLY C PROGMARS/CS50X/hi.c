#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
   string s = get_string("Before: ");
   printf("After: ");

   for( int i = 0 ; i < strlen(s) ; i++ )
   {
    if( s[i] >= 'a' && s[i] <= 'z'  )
    printf("%c" , s[i] - 32);
   }
}