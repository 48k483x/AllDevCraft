function operation(num1, num2) {
   // if(num1 % num2 === 0){
  //      return "divided";
  //  }else if(num1 * num2 === 24){
 //       return    "multiplied" ;
 //   } else if(num1 + num2 === 24 ){
//        return  "added";
//    }else if(num1 - num2 === 24){
//        return  "subtracted"
 //   }else{
 //       return 'none';
 //   }
    
    

 switch(true){
    case  num1 % num2 === 0:
        return  "24 " +'didvided';
    case num1 * num2 === 24:
        return  "24 " +"multiplied";
    case num1 + num2 === 24:
        return "24 " + "added";
    case num1 - num2 === 24:
        return  "24 " + "subtracted"
    default:
        return "none";

 }

}
console.log(operation(8,3))