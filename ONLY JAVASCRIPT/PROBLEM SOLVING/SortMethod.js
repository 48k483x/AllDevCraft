function test(arr){
    if(arr.length < 2 ){
        return null }
    let arrox = arr.sort(function(a,b){
        return a-b
    });
    return arrox[0] + arrox[1];
     
}
console.log(test())