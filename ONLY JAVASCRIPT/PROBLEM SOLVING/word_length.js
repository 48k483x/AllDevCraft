function word_length(arr) {
    var rs = [];
    var rslt = arr.map((ind)=>{
        return ind.length;
    })
    return rslt
}
console.log(word_length(["Dog" , "abdu","Abdurrahman"]));