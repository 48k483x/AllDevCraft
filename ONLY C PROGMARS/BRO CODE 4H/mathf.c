#include <stdio.h>
#include <math.h>
#include <string.h>

int main(){
    const double PI = 3.14;
    double circumference;
    double area;
    double radus;
    printf("Enter Radus Value Of Your Circle : ");
    scanf("%lf" , &radus);
    circumference = 2 * PI * radus;
    area = PI * radus * radus;
    printf("Circumference Of Circle is : %.1lf && araea is %.1lf" , circumference  , area);
}