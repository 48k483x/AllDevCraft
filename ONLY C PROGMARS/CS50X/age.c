#include <stdio.h>
#include<cs50.h>
int main()
{
    int age;
    int bi = get_int("Your birth year? ");
    age = 2023 - bi;
    printf("Your age is %i\n" , age);
}
