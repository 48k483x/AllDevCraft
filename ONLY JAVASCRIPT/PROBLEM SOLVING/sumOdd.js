function sumOdd(arr = [1,1,3 , 2,1]) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        let mz = arr[i]%2;
        if(mz === 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumOdd())