function left_digit(strParam) {
    var strX = strParam.split('');
    var arr = [];
    for(var i = 0 ; i < strX.length ; i++) {
       if(!isNaN(parseInt(strX[i]))){
        arr.push(strX[i]);
        return arr.map(Number)
       }
    }

}
console.log(left_digit("hell50m7n"));