function isMirrored(num = 261) {
    if(num === parseFloat(num.toString().split('').reverse().join('') * Math.sign(num)  )) {
        return true;
    }
    return false;
}
console.log(isMirrored());