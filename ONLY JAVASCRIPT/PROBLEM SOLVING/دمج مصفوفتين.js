function mergeAndOrder(arr1, arr2) {
    var conc =  arr1.concat(arr2);
    return conc.sort();
}console.log(mergeAndOrder([1,2], [1,3]))