let title = document.getElementById('title'),
price = document.getElementById('price'),
tax = document.getElementById('tax'),
ads =  document.getElementById('ads'),
dis = document.getElementById('dis'),
total = document.getElementById('total'),
count = document.getElementById('count'),
category = document.getElementById('category'),
submit = document.getElementById('create');
let mood = 'create'
let gmp;

//get total

function getTotal() {
    if (price.value != '') {
        let result = (+price.value + +tax.value + +ads.value) - +dis.value;
        total.innerHTML = result;
        total.style.background = 'green';
    }else{
        total.innerHTML = '';
        total.style.background = 'red';
    }
}

//create product

let dataProd;

if (localStorage.product != null) {
    dataProd = JSON.parse(localStorage.product); 
}else{
    dataProd = [];
}



submit.onclick = function(){
    let newprod = {
        title:title.value,
        price:price.value,
        tax:tax.value,
        ads:ads.value,
        dis:dis.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(mood === create){ if(newprod.count > 1){
        for(let i = 0; i < newprod.count; i++){
            dataProd.push(newprod);
        }
     }   else{
        dataProd.push(newprod);
     }
    }else{
        
    }

   



    dataProd.push(newprod);
    localStorage.setItem('product',    JSON.stringify(dataProd)    );
    clearData();
    showData();
}
//clear input after creating prod

function clearData(){
    title.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    dis.value = '';
    total.innerHTML = '';
    total.style.background = 'red';
    count.value = '';
    category.value = '';
}

//read
function showData(){
    let table = '';
    for(let i = 0 ; i < dataProd.length ;   i++){
        table += 
        ` <tr>
        <td>${i}</td>
        <td>${dataProd[i].title}</td>
        <td>${dataProd[i].price}</td>
        <td>${dataProd[i].tax}</td>
        <td>${dataProd[i].ads}</td>
        <td>${dataProd[i].dis}</td>
        <td>${dataProd[i].category}</td>
        <td>${dataProd[i].total}</td>
        <td><button onclick = "updateData(${i})" id="update">Update</button></td>
        <td><button onclick = "deletData(${i})" id="delete">Delete</button></td>
    </tr>
    `
       
        }
        document.getElementById('tbody').innerHTML = table;

        if(dataProd.length > 0){
            let btnall = document.getElementById('deletall');
            btnall.innerHTML = `
            <button onclick="Dall();" id="deletalll">Delete all ${dataProd.length} </button>
            `
        }else{
            btnall.innerHTML = '';
        }
}showData();

//delete

function deletData(i){
    dataProd.splice(i,1);
    localStorage.product = (JSON.stringify(dataProd) )
    showData();
}
//deletall

function Dall(){
    localStorage.clear();
    dataProd.splice(0);
    showData();
}

//count
//update
function updateData(i){
   title.value  =  dataProd[i].title;
   price.value = dataProd[i].price;
   ads.value = dataProd[i].ads;
   dis.value = dataProd[i].dis;
   count.style.display = 'none'
   getTotal();
   category.value = dataProd[i].category;

   submit.innerHTML = 'Update';
   submit.style.background = 'green';
   mood = 'update'
   gmp = i;
}

