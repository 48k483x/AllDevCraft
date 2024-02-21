function count_char(x, y) {
    let count = 0;
        for(var i = 0; i < x.length; i++){
            if(x.charAt(i) === y){
                count++;
            }
        }
            return count;
    }


      




console.log(count_char('abdurr' , 'r'))