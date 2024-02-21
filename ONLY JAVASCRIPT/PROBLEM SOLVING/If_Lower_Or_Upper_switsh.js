function reverse_case(str = 'tEsT') {
        //   for(var i = 0; i < str.length; i++) {
       //      if(str[i] === str[i].toLowerCase()) {
      //        str[i] = str[i].toUpperCase();
     //    }else{
    //       str[i] = str[i].toLowerCase();
   //  }
  // }
 //   return str;
//  
        var strX = str.split("");
        for(var i = 0; i < strX.length; i++){
            if(strX[i] === strX[i].toLowerCase()){
                strX[i] = strX[i].toUpperCase();
            }else{
                strX[i] = strX[i].toLowerCase();
            }
        }
        return strX.join("");
}

console.log(reverse_case());
