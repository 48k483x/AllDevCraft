let dollar = document.getElementById('dollar'),
dirham = document.getElementById('dirham');




dollar.onkeyup   =   function (){
    dirham.value = dollar.value * 10.52;
}
dirham.onkeyup   =   function (){
    dollar.value = dirham.value / 10.52;
}