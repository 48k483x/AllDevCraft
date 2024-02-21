function input_type(value = 'hey') {
   if(!isNaN(value)){
            if(Number.isInteger(Number(value))){
                    return 'integer';
            }else{
                    return 'double';
                }
   }

   if(typeof value === 'string'){
    return 'string';
   }
   return undefined;
}
console.log(input_type());