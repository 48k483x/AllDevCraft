#include <stdio.h>
#include <string.h>

struct Cars
{
    int Modele;
    char SeriesName[50];
};


int main(){
    struct Cars car1;
    struct Cars car2;

    car1.Modele = 2023;
    strcpy(car1.SeriesName , "BMW 760 E-D");
    car2.Modele = 2025;
    strcpy(car2.SeriesName , "MERCEDES BENS S680 BRABUS");

    printf("Modele %i && SeriesName : %s\nModele %i && SeriesName : %s   ", car1.Modele , car1.SeriesName, car2.Modele , car2.SeriesName );
}