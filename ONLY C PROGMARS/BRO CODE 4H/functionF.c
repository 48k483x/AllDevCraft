#include <stdio.h>
int findMx(int x , int y){
    return (x > y) ?  x : y ;
}
int main (){
    printf("%i\n" , findMx(5,6));
    
}