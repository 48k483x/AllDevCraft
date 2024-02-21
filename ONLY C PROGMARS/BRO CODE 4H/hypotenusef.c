#include <stdio.h>
#include <math.h>
#include <string.h>

int main (){
    double a;
    double b;
    double ab;
    double c;
    int exp = 2 ;
    printf(" a : ");
    scanf("%lf" , &a);

    printf(" b : ");
    scanf("%lf" , &b);
    ab = pow(a ,exp) + pow(b , exp);
    printf("The Hypo of this is triangle is C = %.1lf" , sqrt(ab));
}