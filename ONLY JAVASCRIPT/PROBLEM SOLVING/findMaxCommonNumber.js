function getBiggestShared(a =[2,6,12,2], b=[30,5,12,6]) {
    var maxCom = null;
    for (var i = 0; i < a.length; i++) {
        if(b.includes(a[i])){
            if(maxCom === null || maxCom < a[i]){
                maxCom  = a[i];
            }
        }
    }
    return maxCom;
}
console.log(getBiggestShared())