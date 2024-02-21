let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let divise = document.getElementById('divise');
let rslt = document.getElementById('rslt');

divise.onclick = () =>{
    try{
        let result = divide(Number(num1.value),Number(num2.value));
        rslt.innerHTML = result;
    }
    catch (e){
        rslt.innerHTML = e;
   }
}
