#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string name;
    string number;
}
person;


int main (void)
{

    person pp[2];
    pp[0].name = "abdurrahman";
    pp[0].number = "+212-699-1931-95";

     pp[0].name = "yahya";
     pp[0].number = "+212-671-7111-14";


    string s = get_string("Name: ");

    for(int i = 0; i<2 ; i++)
    {
        if(strcmp(pp[i].name, s ) == 0)
        {
            printf("Found %s \n" , pp[i].number);
            return 0;
        }
    }
    printf("Not Found\n");
    return 1;

}