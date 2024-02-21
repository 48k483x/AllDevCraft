function namesSort(namesArray, order) {
    var arr=[];
    var arr1=[];
    //  ASC   FROM A to Z   order
    //  ASC   FROM Z to A   order
    if(order[0] === 'ASC'){
        for(elm of namesArray){
            elm = elm.split(' ')[1];
            arr.push(elm);
            arr.sort()
            return namesArray
            
        }
       return arr
    }
   
}
console.log(namesSort(['Yahya Tader','Ahmed Bader','Taha Yahya'] , ['ASC']))