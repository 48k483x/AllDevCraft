function replaceThe(txt) {
    var tXt = txt.split(' ');
    var voyels = ['a' , 'e','i', 'o','u'];
    for(var i=0; i<tXt.length; i++) {
        if(tXt[i].toLowerCase() === 'the'){
            var nextTxt = tXt[i +1];
            if(nextTxt && voyels.includes(nextTxt[0].toLowerCase())){
                tXt[i] = 'an'
            }else{tXt[i] = 'a';}
        }
    }
    return tXt.join(' ');
}
console.log(replaceThe('abdu its the manbdu'));