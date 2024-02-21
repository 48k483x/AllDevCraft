let btn = document.getElementById('btn');
let i = 1;
btn.addEventListener('mousemove' , function () {
    console.log('clicked '+ i++)
})
btn.addEventListener('mousemove' , function () {
    document.body.style.background = '#444'
})
btn.addEventListener('mousemove' , function () {
    btn.style.background = '#fa0'
})
btn.addEventListener('mousemove' , function () {
    btn.style.color = '#fff'
})