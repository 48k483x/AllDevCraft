#include <stdio.h>

int main(){
    int age;
    char name[25];
    printf("What's your name ? ");
    //scanf("%s" , &name);
    fgets(name , 25 , stdin);

    printf("How Old Are You ? ");
    scanf("%d" , &age);
    
    printf("Hello %s , How are you \nYour Age is %d Years Old" , name ,age);
}