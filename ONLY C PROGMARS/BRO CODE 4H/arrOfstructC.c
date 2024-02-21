#include <stdio.h>

struct students
{
     char name[15];
     int age;
};


int main (){
    struct students st1 = {"ABDU" , 19};
    struct students st2 = {"MARK" , 33};
    struct students st3 = {"JOHN" , 23};
    struct students st4 = {"Taha" , 18};

    struct students sts[] = {st1,st2,st3,st4};


    for(int i = 0 ; i < sizeof(sts)/sizeof(sts[0]) ; i++){
        printf("%s    %i\n" , sts[i].name , sts[i].age);
    }
}