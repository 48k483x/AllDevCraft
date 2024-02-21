/**
 * @param {string} s
 * @return {number}
 */
 function romanToInt(s) {
    const SymboleValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,

    }
    let rslt = 0;
    for(var i = 0; i < s.length; i++) {
        if(i< s.length - 1 && SymboleValues[s[i]] < SymboleValues[s[i + 1]] ){
             rslt -= SymboleValues[s[i]];
        }
        else{
             rslt += SymboleValues[s[i]];
        }
    }
    return rslt;
};
console.log(romanToInt('IX'));