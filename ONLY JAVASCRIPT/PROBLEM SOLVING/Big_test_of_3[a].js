function string_builder(str) {
    var ValueInBrackets = '';
    var number = '';


    for(var i = 0; i < str.length; i++){
        const currentVar = str.charCodeAt(i);
        
        //check if current var is digit or not

        if(!isNaN( parseInt(currentVar) )){
            number += currentVar
        }else

            if(number !== '' && currentVar === '['){
                for(var j = i+1; j < str.length; j++){
                    const nextVar = str.charCodeAt(j);

                    if(nextVar === ']'){
                        break;
                    }else{
                        ValueInBrackets += nextVar
                    }
                }
                break;
            }
    }

    if(number !== '' && ValueInBrackets !== ''){
        console.log(number + ' * ' + ValueInBrackets)
    }
    else{
        console.log('not found')
    }

}
console.log(string_builder('ab3[ch]'))