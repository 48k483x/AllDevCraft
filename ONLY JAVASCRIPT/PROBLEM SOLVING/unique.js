function unique(arr) {
    var uniNum = [];
    var rslt = arr.forEach((num)=>{
        if(!uniNum.includes(num)){
            uniNum.push(num);
        }
    })
    return uniNum

}
console.log(unique([1,1,2,1,1]));
