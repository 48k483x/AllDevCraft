#include <stdio.h>

int main(){
    int age = 19;
    int *pAge = &age;

    printf("Adress of Age : %p\n",&age);
    printf("Value of Age  : %d\n", age);
    printf("\n");
    printf("Adress of age : %p\n",&age);
    printf("Value of pAge : %p\n", pAge);
    printf("\n");
    printf("Adress of age : %p\n",&age);
    printf("Value at stored adress : %d\n",*pAge);

}