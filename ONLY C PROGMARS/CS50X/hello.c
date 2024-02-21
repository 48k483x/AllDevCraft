#include <stdio.h>
#include<cs50.h>
int main(void)
{
    string x = get_string("Whats Your First Name ? ");
    string y = get_string("Whats Your Second Name ? ");
    printf("Hello , %s %s\n" , x , y);
}