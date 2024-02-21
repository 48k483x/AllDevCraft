#include <stdio.h>

int main (){
    int numbers[3][3] = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
                
                    };
      
      int rows = sizeof(numbers)/sizeof(numbers[0]);
      int columns = sizeof(numbers[0])/sizeof(numbers[0][0]);

      printf("Rows : %i\n" , rows);
      printf("Columns : %i\n" , columns);
      
      for(int i = 0 ; i < rows ; i++){
        for(int j = 0 ; j < columns ; j++){
            printf(" %i" , numbers[i][j]);
             };
            printf("\n");
        };
}

  