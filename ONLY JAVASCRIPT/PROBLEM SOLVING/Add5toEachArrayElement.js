function add_five(arr) {
    var arr2 = [];
    for(elm of arr){
        elm = elm +'5'
        arr2.push(elm);
    }
    return arr2
}
console.log(add_five( ['book','pen','pencil']))