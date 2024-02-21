function kSumSubset(numArray, k) {
    const sums = [];
    for (var i = 0; i < numArray.length; i++){
        for(var j = i ; j < numArray.length ; j++){
            var sum = 0
            for(var x = i ; x <= j ; x++){
                sum += numArray[x]
            }
            sums.push(sum)
        }
    }
    return sums
}

console.log(kSumSubset([5,6,4,1], 10) )