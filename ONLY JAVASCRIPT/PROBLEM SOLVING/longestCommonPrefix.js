
function longestCommonPrefix(strs){
    if(!strs.length){
        return "";
    }
    preffix = strs[0]
    for(var i = 1; i < strs.length; i++){
        while(strs[i].indexOf(preffix) !== 0){
            preffix = preffix.substring(0, preffix.length -1 );
            if(!preffix){
                return "";
            }
        }
    }
    return preffix;
}
console.log(longestCommonPrefix(['flowers','flopy','fleaky']))