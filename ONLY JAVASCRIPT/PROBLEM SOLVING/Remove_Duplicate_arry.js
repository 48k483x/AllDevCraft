function remove_duplicate(arr) {
    var a=[];
    for(var i = 0; i < arr.length; i++) {
        if(a.indexOf(arr[i]) === -1){
             a.push(arr[i]);
        }
        
    }
        return a;

}
console.log(remove_duplicate([1,5,6,1,5,3]));
