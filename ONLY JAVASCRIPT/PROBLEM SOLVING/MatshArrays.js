function match_arrays(arr1 = ['hello','there','word2'], arr2 = ['hello' , 'there', 'word2']) {
    return  arr1.sort().toString() === arr2.sort().toString()? true : false;
    }
console.log(match_arrays())