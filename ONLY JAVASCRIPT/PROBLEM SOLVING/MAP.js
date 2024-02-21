function sub_arrays(arr1, arr2) {
    var dom = arr1.map((item , index) => {
        // In this case item correspond to currentValue of array a, 
        // using index to get value from array b
        return arr2[index] - item;
    })
    
    return dom;
}
console.log(sub_arrays([2,4,88], [4,2,88]))