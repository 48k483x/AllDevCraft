
function RverseArray(alko=[1 , 5 , 6 ]) {
    let OutputArr =[];
    for(Element of alko) {
        OutputArr.unshift(Element);
    }
    return OutputArr;
}
console.log(RverseArray([true ,'hello world',50 ,60 ,'manza' ]))
