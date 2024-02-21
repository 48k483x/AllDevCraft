let title = document.getElementById('titl');

function table(){
    for (var i = 1; i <= 10 ; i++) {
        title.innerHTML += "<hr>" +"Table Of " + i + "</br>";
        for(var j = 0 ; j <= 10 ; j++) {
            title.innerHTML +=  i + " x " + j + " = " +  (i*j) + "<br>" ;
        }
    }
}

table();