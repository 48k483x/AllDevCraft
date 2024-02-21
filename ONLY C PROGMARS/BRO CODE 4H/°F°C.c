#include <stdio.h>
#include <ctype.h>

int main (){
    char unit;
    float value;
    float resu1;
    float resu2;

    printf("Enter The Unit °F / °C ? \n");
    scanf("%c", &unit);
    printf("Enter The Value of %c :\n " , toupper(unit));
    scanf("%f" , &value);
    
    if( toupper(unit)  == 'F' ){
        resu1 = (value - 32) * 5/9 ;
        printf("Enterd Unit Is %c Converted To °C is : %.1f °C \n" ,toupper(unit) , resu1);

    } else if(toupper(unit)  == 'C'){
       resu2 = (value * 9/5) + 32 ;
        printf("Enterd Unit Is %c Converted To °F is : %.1f °F \n" ,toupper(unit) , resu2);
    }else{
        printf("Please , Enter F or C !!!");
    }

}