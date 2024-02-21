function calculate_sum(lst) {
    var sum = 0
    for(var i = 0; i < lst.length; i++) {
        if(lst[i] !== 7){
            sum += lst[i];
            
        }else{
            break;
        }

        
    }
    return sum;

}
console.log(calculate_sum([1,5,5,7]))