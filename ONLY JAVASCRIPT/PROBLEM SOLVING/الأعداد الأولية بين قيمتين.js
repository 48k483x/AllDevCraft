function getPrimesBetween(a=5, b=30) {
    var primes = [];
    for(var i = a; i < b; i++){
       var  isPrime = true;
        for(var j =2 ; j < i; j++){
            if(i % j === 0 ){
                isPrime = false;
                break;
            }
        }
        if(isPrime && i > 1){
            primes.push(i);
        }
    }
    return primes;
}
console.log(getPrimesBetween());