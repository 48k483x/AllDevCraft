let submit  = document.getElementById('submit');
let div = document.getElementById('divox');

submit.onclick = function () {
    submit.style.backgroundColor = randomly();


    setInterval(function (){
        div.style.backgroundColor = randomly();
    } , 500)
}
function randomly() {
    let randomR =    Math.random() * 255;
    let randomG =    Math.random() * 255;
    let randomB =    Math.random() * 255;
    return `rgba(${randomR},${randomG},${randomB})`
}


