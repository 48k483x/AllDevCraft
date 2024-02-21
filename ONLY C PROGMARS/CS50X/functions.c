#include <stdio.h>
#include <cs50.h>

float jam3(float n1 , float n2);

int main (void)
{
    int x = jam3(3.56,5.668);
    printf("You Result: %d\n" , x);

}
float jam3(float n1 , float n2){
    int result = n1 + n2;
    return result;
}