let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/*-------------------------- products --------------------------*/

document.querySelectorAll('.products .boxs .box .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.products .show').style.display = 'block';}})

document.querySelector('.products .show .pop .btn').onclick = () => {
	document.querySelector('.products .show').style.display = 'none';}

/*-------------------------- blogs --------------------------*/

document.querySelectorAll('.blogs .boxs .box img').forEach(box => {
	box.onclick = () => {
		document.querySelector('.blogs .show1').style.display = 'block';
		document.querySelector('.blogs .show1 img').src = box.getAttribute('src')}})
	
document.querySelector('.blogs .show1 span').onclick = () => {
	document.querySelector('.blogs .show1').style.display = 'none';}

//--------------------

document.querySelectorAll('.blogs .boxs .box .content .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.blogs .show2').style.display = 'block';}})

document.querySelector('.blogs .show2 .pop .btn').onclick = () => {
	document.querySelector('.blogs .show2').style.display = 'none';}

/*-------------------------- chair --------------------------*/
	
document.querySelectorAll('.categories .boxs .box .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.categories .show').style.display = 'block';}})

document.querySelector('.categories .show form .x').onclick = () => {
	document.querySelector('.categories .show').style.display = 'none';}

document.querySelector('.categories .show form .btn').onclick = () => {
	document.querySelector('.categories .show').style.display = 'none';}

/*------------- show2 ---------------*/
	
document.querySelectorAll('.categories .show form .btn').forEach(box => {
	box.onclick = () => {
		document.querySelector('.categories .show2').style.display = 'block';}})

document.querySelector('.categories .show2 .pop .btn').onclick = () => {
	document.querySelector('.categories .show2').style.display = 'none';}

