#include <stdio.h>

int main (){
    char operator;
    float num1;
    float num2;
    float result;
     printf("operator : ");
    scanf("%c" , &operator);
    printf("Num1 : ");
    scanf("%f" , &num1);
    printf("Num2 : ");
    scanf("%f" , &num2);
   

    switch (operator){

    case '*':
        result = num1 * num2;
        printf("Operator Selected %c , Result is : %.1f\n" ,operator,result );
        break;

    case '+':
        result = num1 + num2;
        printf("Operator Selected %c , Result is : %.1f\n" ,operator,result );
        break;
    case '-':
        result = num1 - num2;
        printf("Operator Selected %c , Result is : %.1f\n" ,operator,result );
        break;
    case '/':
        result = num1 / num2;
        printf("Operator Selected %c , Result is : %.1f \n" ,operator,result );
        break;
    default:
        printf("Operator Should Be * + / -   !!!");
        break;
    }
}