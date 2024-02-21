#include <stdio.h>

int main (){
    double prices[] = {5.0,10.0,15.0,20.0,25.0};
    int arrlen = sizeof(prices) / sizeof(prices[0]);
    for(int i =0 ; i < arrlen ;i++){
        printf("$%.2lf\n" , prices[i]);
    }
}