function countDown(num) {
    var arr = [];
    for (var i = 0; i <= num ; i++){
         arr.push(i);
    }
        var reversed = arr.reverse();
        return reversed.join(' ');
     }

console.log(countDown(20))