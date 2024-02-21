let txt = document.getElementById('txt');


if (  sessionStorage.length > 0  ) {
    txt.value = sessionStorage.getItem('tet')
}

txt.onkeyup = function(){
    sessionStorage.setItem('tet' , txt.value)
}