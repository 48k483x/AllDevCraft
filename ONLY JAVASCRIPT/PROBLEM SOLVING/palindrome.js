/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    var x1 =  String(x).split("").reverse().join("");
   var xx =  Number(x1)
    if(x === xx){
        return true;
    }else{
        return false;
    }
};
console.log(isPalindrome(11))
