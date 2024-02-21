#include <stdio.h>

int main (){
    FILE *pf = fopen("test.txt" , "a");
    fprintf(pf, "\nits me ABDUQ");
    fclose(pf);
}