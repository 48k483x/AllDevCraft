function test(arr) {
    var reduced = arr.reduce((a,b) => a+b , 0 );
    var rslt = reduced/arr.length;
    return rslt;

}
console.log(test([1,4]))