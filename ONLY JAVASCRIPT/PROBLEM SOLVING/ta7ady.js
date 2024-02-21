var Btxt = document.getElementById('Btext');
var SearchPut = document.getElementById('search');
var submitBtn = document.getElementById('submit');
var namePut = document.getElementById('namox');

Btxt.onmouseover = function(){
    Btxt.style.background = 'red';
}
Btxt.onmouseout = function(){
    Btxt.style.background = '';
}
submitBtn.onclick = function(){
    namePut.innerHTML = SearchPut.value;
    Btxt.innerHTML +=  SearchPut.value + `<br>`;
    
    
    
    Btxt.onmouseover = function(){
        Btxt.style.background = 'green';
    }
    Btxt.onmouseout = function(){
        Btxt.style.background = '';
    }
}


