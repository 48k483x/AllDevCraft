#include <stdio.h>

enum Days {Mon = 1 , Tue =2, Wed=3 , Thr =4, Fri=5 ,Sat =6, Sun=7 };

int main (){
    enum Days today = Sat;

    if(today == Sun ||today == Sat){
        printf("It's An Weekend , Time To Umprove Your Skills\n");

    }else{
        printf("Ow !! You Have A Lot Of Work Until The End Of The Week\n");
    }
}