#include <stdio.h>
#include <string.h>

void sort(int nums[] , int size){
    for(int i = 0 ; i < size -i -1 ; i++){
        for(int j = 0 ; j < size -1 ; j++){
            if(nums[j] > nums[j+1]){
                int tmp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = tmp;
            }
        }
    }
}

void printArray(int nums[] , int size){
    for(int i = 0 ; i < size ; i++){
        printf("%d \n", nums[i]);
    }
}

int main (){
    int nums[] = {9,5,3,7,1,4,2,6,8};
    int size = sizeof(nums) / sizeof(nums[0]);
    printf("%i\n", size);
    sort(nums , size);
    printArray(nums , size);

}