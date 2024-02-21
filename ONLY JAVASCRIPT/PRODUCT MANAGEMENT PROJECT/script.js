let namePut = document.getElementById('namePut');
let amountPut = document.getElementById('amountPut');
let sizePut = document.getElementById('sizePut');
let pricePut = document.getElementById('pricePut');
let phonenbrPut = document.getElementById('phonenbrPut');
let locationPut = document.getElementById('locationPut');
let create = document.getElementById('create');


let infoClient ;
if(localStorage.client != null){
    infoClient = JSON.parse(localStorage.client)
}else{infoClient = [];}


create.onclick = function(){

    let newClient = {
    namePut:namePut.value,
    amountPut:amountPut.value,
    sizePut:sizePut.value.toUpperCase(),
    pricePut:pricePut.value,
    phonenbrPut:phonenbrPut.value,
    }
    
    
    infoClient.push(newClient);


    localStorage.setItem('client', JSON.stringify(infoClient));
    clearData();
    showData();
}

//show
function clearData(){
    namePut.value = '';
    amountPut.value = '';
    sizePut.value = '';
    pricePut.value = '';
    phonenbrPut.value = '';
   
   
}

//READ

function showData(){
    let table = '';
    for(let i = 0  ; i < infoClient.length ; i++){
        table += `
        <tr >
        <th>${infoClient[i].namePut} </th>
        <th>${infoClient[i].amountPut} </th>
        <th>${infoClient[i].sizePut} </th>
        <th>${infoClient[i].pricePut} </th>
        <th>${infoClient[i].phonenbrPut} </th>
        <th  > <i onclick="deleteData( ${i} );" " style="cursor: pointer;" class="uil uil-trash"></i></th>
        </tr>
        
        ` 
        document.getElementById('tbody').innerHTML = table;
    }
}showData();

function deleteData(i){
    infoClient.splice(i,1);
    localStorage.client = JSON.stringify(infoClient);
    showData();
}