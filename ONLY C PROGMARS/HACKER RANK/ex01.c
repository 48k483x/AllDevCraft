#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
	printf("Hello, World!\n");
    char s[100] = "Life is Beatiful";
    scanf("%[^\n]%*c", &s);
    printf("%s\n",s);
    
  	
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
    return 0;
}
