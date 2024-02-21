function concat_names(num) {
    let numbers = '';
    for(var i = 0; i <= num; i++){
        numbers += i.toString();
            if(i < num){
                numbers += ',';
            }
    }
    return numbers;
}
console.log(concat_names(10))