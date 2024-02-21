let tit = document.getElementById('title'),
price = document.getElementById('price'),
tax = document.getElementById('tax'),
ads =  document.getElementById('ads'),
dis = document.getElementById('dis'),
total = document.getElementById('total'),
count = document.getElementById('count'),
category = document.getElementById('category'),
submit = document.getElementById('submit');

let mood = 'Create';
let tmp;


//get total
function getTotal(){
    if (price.value != '' ) {
        let result = (+price.value + +tax.value + +ads.value) - +dis.value;
        total.innerHTML = result;
        total.style.background = 'green';
    }
    else{
        total.style.background = 'red';
        total.innerHTML = '';
    }
}

//crate prod
let dataprod;
if (localStorage.product != null) {
    dataprod = JSON.parse(localStorage.product)
}else{
    dataprod = [];
}


submit.onclick = function(){
    let newprod = {
        title:tit.value,
        price:price.value,
        tax:tax.value,
        ads:ads.value,
        dis:dis.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    if(mood === 'Create'){ if (newprod.count > 1  ) {
        for(let  i = 0;i < newprod.count ; i++ ){
            dataprod.push(newprod);
        }
    }else{
            dataprod.push(newprod);
    }
} else{
    dataprod[     tmp    ] = newprod;
    mood = 'Create';
    submit.innerHTML = 'Create';
    count.style.display = 'block';
}
   
    
    
    //save in localstorage
    localStorage.setItem('product' , JSON.stringify(dataprod))
    clearData();
    showData();
    
}


//clear input after creating prod
function clearData(){
    tit.value = '';
    price.value = '';
    tax.value = '';
    ads.value = '';
    dis.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
    total.style.background = 'red'
}
//read

function showData(){
    let table = '';
    for(let i = 0 ; i < dataprod.length ;   i++){
        table += 
        ` <tr>
        <td>${i}</td>
        <td>${dataprod[i].title}</td>
        <td>${dataprod[i].price}</td>
        <td>${dataprod[i].tax}</td>
        <td>${dataprod[i].ads}</td>
        <td>${dataprod[i].dis}</td>
        <td>${dataprod[i].total}</td>
        <td>${dataprod[i].category}</td>
        <td><button onclick = "updateData(${i})" id="update">Update</button></td>
        <td><button onclick = "deletData(${i})" id="delete">Delete</button></td>
    </tr>
    `
       
        }
        document.getElementById('tbody').innerHTML = table;
        if(dataprod.length > 0){
           let btnAll =  document.getElementById('deletall');
           btnAll.innerHTML = `
           <button onclick = "deletall()"> Delete All (${dataProd.length})    </button>
           
           `
           
        } 
        else{
            btnAll.innerHTML = '';
        }
    }
   
    showData();
    
    
//delete
function deletData(i){
    dataprod.splice(i,1);
    localStorage.product = JSON.stringify(dataprod);
    showData();
}
function deletall(){
    localStorage.clear();
    dataprod.splice(0);
    showData();
}




//count

//update
function updateData(i){
    tit.value = dataprod[i].title;
    price.value = dataprod[i].price;
    tax.value = dataprod[i].tax;
    ads.value = dataprod[i].ads;
    dis.value = dataprod[i].dis;
    count.style.display = 'none';

    
    getTotal();
    category.value = dataprod[i].category;
    submit.innerHTML = 'Update';
    mood = 'Update';
    tmp = i;
    scroll ({
        top:0
    })
}
//serach

