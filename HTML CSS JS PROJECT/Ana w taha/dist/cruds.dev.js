"use strict";

var tit = document.getElementById('title'),
    price = document.getElementById('price'),
    tax = document.getElementById('tax'),
    ads = document.getElementById('ads'),
    dis = document.getElementById('dis'),
    total = document.getElementById('total'),
    count = document.getElementById('count'),
    category = document.getElementById('category'),
    submit = document.getElementById('submit'); //get total

function getTotal() {
  if (price.value != '') {
    var result = +price.value + +tax.value + +ads.value - +dis.value;
    total.innerHTML = result;
    total.style.background = 'green';
  } else {
    total.style.background = 'red';
    total.innerHTML = '';
  }
} //crate prod


var dataprod;

if (localStorage.product != null) {
  dataprod = JSON.parse(localStorage.product);
} else {
  dataprod = [];
}

submit.onclick = function () {
  var newprod = {
    title: tit.value,
    price: price.value,
    tax: tax.value,
    ads: ads.value,
    dis: dis.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value
  };
  dataprod.push(newprod); //save in localstorage

  localStorage.setItem('product', JSON.stringify(dataprod));
  clearData();
  showData();
}; //clear input after creating prod


function clearData() {
  tit.value = '';
  price.value = '';
  tax.value = '';
  ads.value = '';
  dis.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
  total.style.background = 'red';
} //read


function showData() {
  var table = '';

  for (var i = 0; i < dataprod.length; i++) {
    table += " <tr>\n        <td>".concat(i, "</td>\n        <td>").concat(dataprod[i].title, "</td>\n        <td>").concat(dataprod[i].price, "</td>\n        <td>").concat(dataprod[i].tax, "</td>\n        <td>").concat(dataprod[i].ads, "</td>\n        <td>").concat(dataprod[i].dis, "</td>\n        <td>").concat(dataprod[i].total, "</td>\n        <td>").concat(dataprod[i].category, "</td>\n        <td><button  id=\"update\">Update</button></td>\n        <td><button onclick = \"deletData()\" id=\"delete\">Delete</button></td>\n    </tr>\n    ");
  }

  document.getElementById('tbody').innerHTML = table;

  if (dataprod.length > 0) {
    var _btnAll = document.getElementById('deletall');

    _btnAll.innerHTML = "\n           <button onclick = \"deletall()\" > Delete All</button>\n           \n           ";
  } else {
    btnAll.innerHTML = '';
  }
}

showData(); //delete

function deletData(i) {
  dataprod.splice(i, 1);
  localStorage.product = JSON.stringify(dataprod);
  showData();
}

function deletall() {
  localStorage.clear();
  dataprod.splice(0);
  showData();
} //count
//update
//serach