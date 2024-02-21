let open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.querySelector(".container");

close.onclick = function(){
    container.classList.add('hide');
    this.classList.add('hide')
    open.classList.remove('hide')
}

open.onclick = function(){
    container.classList.remove('hide');
    close.classList.remove('hide');
    this.classList.add('hide');
}