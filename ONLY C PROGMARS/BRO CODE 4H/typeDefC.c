#include <stdio.h>
#include <string.h>

typedef struct
{
    int Modele;
    char SeriesName[50];
}Cars;


int main(){
    Cars car1 = {2023 , "BMW 760E"};
    Cars car2 = {2025 , "MERCEDES BENZ S680 BRABUS"};


    printf("Modele %i && SeriesName : %s\nModele %i && SeriesName : %s\n", car1.Modele , car1.SeriesName, car2.Modele , car2.SeriesName );
}