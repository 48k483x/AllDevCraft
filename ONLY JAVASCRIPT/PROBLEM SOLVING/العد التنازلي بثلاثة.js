function countdown(num =0) {
    var arr = [];
    if(num >= 3){
        for(var i = num -3 ; i >= 0 ; i -= 3){
            arr.push(i);
        }
        return arr.sort((a,b) => {return a-b}).filter( function(number){
            return number%2 ===0 ;
        } );
    
    } else{
        return arr =  [0];
    }

}
console.log(countdown())