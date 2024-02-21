
next    = document.getElementById('next'),
add     = document.getElementById('add'),
typePut = document.getElementById('typePut'),
amntPut = document.getElementById('amntPut')

let info = [];
add.onclick = function (){
    let newInfo = {
        typePut:typePut.value,
        amntPut:amntPut.value,
    }
    info.push(newInfo);

    localStorage.setItem('rapport', JSON.stringify(info))
}
