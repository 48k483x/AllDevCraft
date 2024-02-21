#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
	
    int n;
    scanf("%d", &n);
    //Complete the code to calculate the sum of the five digits on n.
    if (n >= 10000 && n <= 99999){
        int num ;
        int sum = 0;
        while(n > 0){
            num = n%10;
            sum = sum + num;
            n = n/10;
        }
        printf("%d\n" , sum);
    }
    return 0;
}