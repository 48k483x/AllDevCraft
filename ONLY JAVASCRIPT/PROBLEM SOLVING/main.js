function disemvowel(str) {
    let vyls = /[aeiouy]/gi;
    let rslt = str.replace(vyls,'');
    return rslt;
  }
  
 const input = "hello woirld";
 const output = disemvowel(input);
 console.log(output);
