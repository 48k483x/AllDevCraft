#include <stdio.h>
int main (){
    FILE *pF = fopen("C:\\Users\\abder\\Desktop\\test.txt","r");
    char bf[255];
    if(pF == NULL){
        printf("Faild to open file\n");
        return 1;
    }
    while(fgets(bf,255,pF) != NULL){
        printf("%s", bf);
    }
    
    
    fclose(pF);
}