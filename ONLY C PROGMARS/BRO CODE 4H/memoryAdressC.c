#include <stdio.h>

int main(){
    long int a = 'X';
    long int b = 'Y';
    char c[10];

    printf("%i bytes\n", sizeof(a));
    printf("%i bytes\n", sizeof(b));
    printf("%i bytes\n", sizeof(c));

    printf("memory adress : %p\n", &a);
    printf("memory adress : %p\n", &b);
    printf("memory adress : %p\n", &c);
}