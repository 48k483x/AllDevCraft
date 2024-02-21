function factorial(num) {
    var f = 1 ;
    for (var i = 1 ; i <= num ; i++){
        f *= i ;
    }
    return f ;
}
console.log(factorial(10))