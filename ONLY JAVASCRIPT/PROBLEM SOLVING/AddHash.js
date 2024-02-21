function hashtag_it(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = `#` + arr[i] 
        
    }
    return arr.join(' ');
}
console.log(hashtag_it(['stay_home','coronavirus','Saudi_Arabia']));