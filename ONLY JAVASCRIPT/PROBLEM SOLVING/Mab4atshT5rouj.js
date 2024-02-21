function arrowDuplicates(word) {
   // var returnedString = '';
  //  var FoundDuplicates = false;
  //  for(var i = 0; i < word.length; i++)
  //  {
  //  for(var j = i+1; j < word.length; j++)
  //      {
    //        if(word.charAt(j) === word.charAt(i))
   ///         {
   //             FoundDuplicates = true;
  //              break;
  //          }
  //      }
 //       if(FoundDuplicates)
 //       {
//            returnedString += '>';
//        } else{returnedString += '<';}
//    }
  //  return returnedString;
  
  //for(var i = 0; i < word.length; i++)
   // {
        var wordx = word.toLowerCase();
     //   returnedString += wordx.indexOf(wordx[i])===wordx.lastIndexOf(wordx[i]) ? '>':'<';
    //}
   // return returnedString;

   let result = '';
   for(var i = 0; i < word.length; i++){
    let char = word[i];
    if(word.toLowerCase().indexOf(char.toLowerCase()) == word.toLowerCase().lastIndexOf(char.toLowerCase()) ){
        result += '>';
    }else{
        result += '<'
    }
   }
   return String(result);
  }
console.log(arrowDuplicates('Hi'));