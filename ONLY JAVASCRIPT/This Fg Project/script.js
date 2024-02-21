//  First page  to not you know 4adi nt5rbe9 lahuma nfre9 hadi using comments tag //

let mailPut = document.getElementById('email-input');
let passPut = document.getElementById('password-input');
let login = document.getElementById('btnnn');
let forgetPass = document.getElementById('fp');
let index1 = document.getElementById('index1');
let index2 = document.getElementById('index2');
let back = document.getElementById('back');

//  Second page  to not you know 4adi nt5rbe9 lahuma nfre9 hadi using comments tag //
let firstName = document.getElementById('first-name');
let secondName = document.getElementById('second-name');
let age = document.getElementById('age');
let phoneNumber = document.getElementById('phone-number');
let sign = document.getElementById('sign-in');

//  Reloading page  to not you know 4adi nt5rbe9 lahuma nfre9 hadi using comments tag //

let reload = document.getElementById('reloading');

//  Updating things  to not you know 4adi nt5rbe9 lahuma nfre9 hadi using comments tag //
let mode = 'create';
let xi;




//reloading
 setTimeout(reload.onload = function rld() {
    reload.style.display = 'block';
    index1.style.display = 'none';
} )   
setTimeout(function (){
    reload.style.display = 'none';
    index1.style.display = 'block';
},1700)






login.onclick = function(){
    if(mailPut.value == "dev104" && passPut.value== 123){
     
        index2.style.display = 'block';
        index1.style.display = 'none';

    }else{
           index2.style.display = 'none';
        index1.style.display = 'block';
        forgetPass.innerHTML = 'Try again!!';
        forgetPass.style.color = 'red';
    }
    
    
    
    setTimeout(reload.onload = function rld() {
        reload.style.display = 'block';
        index1.style.display = 'none';
        index2.style.display = 'none';
    } )   
    setTimeout(function (){
        reload.style.display = 'none';
        index1.style.display = 'none';
        index2.style.display = 'block';
    },300)
}

back.onclick = function(){
        index1.style.display = 'block'
        index2.style.display = 'none';

        setTimeout(reload.onload = function rld() {
            reload.style.display = 'block';
            index1.style.display = 'none';
            index2.style.display = 'none';
        } )   
        setTimeout(function (){
            reload.style.display = 'none';
            index1.style.display = 'block';
            index2.style.display = 'none';
        },300)
        
}

// get info 
let info;
    if(localStorage.information != null){
        info = JSON.parse(localStorage.information);
    }else{  info = [] }
 

sign.onclick = function(){
    let newStu = {
        firstName: firstName.value,
        secondName: secondName.value,
        age: age.value,
        phoneNumber: phoneNumber.value,
    }
    if(mode === 'create'){
        info.push(newStu);
    }   else{
        info[   xi   ] = newStu;
        mode = 'create';
        sign.innerHTML = `Sign Up <i class="uil uil-signin"></i>`
        sign.style.backgroundColor = 'blueviolet'
    }
    




   
    localStorage.setItem('information', JSON.stringify(info));
    reset();
    showStudentInformation();
    updateStudentInformation();
    
}

//delete

function reset(){
   firstName.value = '';
   secondName.value = '';
   age.value = '';
   phoneNumber.value = '';
   search.value = '';
 
}

//read

function showStudentInformation(){
   let table = '';
   for(let i = 0; i < info.length ; i++){
    table += `
        <tr >
            <th>${i}</th>
            <th>${info[i].firstName}</th>
            <th>${info[i].secondName}</th>
            <th>${info[i].age}</th>
            <th>${info[i].phoneNumber}</th>
            
            <th   ><i onclick="updateStudentInformation(${i});" style="cursor: pointer;  " class="uil uil-edit-alt"></i></th>
            <th  > <i onclick="deleteStudentInformation(${i});" style="cursor: pointer;" class="uil uil-trash"></i></th>
        </tr>
    `
   }
   document.getElementById('tbody').innerHTML = table;
}
showStudentInformation();


//delete
function deleteStudentInformation(i){
    info.splice(i,1);
    localStorage.information = JSON.stringify(info);
    showStudentInformation();
}


//updateStudentInformation

function updateStudentInformation(i){
    firstName.value = info[i].firstName;
    secondName.value = info[i].secondName;
    age.value = info[i].age;
    phoneNumber.value = info[i].phoneNumber;

    sign.innerHTML = `Update <i class="uil uil-pen"></i>`;
    sign.style.background = 'greenyellow';
    sign.style.color = 'black'
    mode = 'update';
    xi = i;
    
}

//searchStudentInformation
let search = document.getElementById('search');
function searchStudentInformation(value){
    for(let i = 0; i < info.length ; i++){
        if(info[i].firstName.includes(value)){
            let table = '';
            table += `
            <tr >
                <th>${i}</th>
                <th>${info[i].firstName}</th>
                <th>${info[i].secondName}</th>
                <th>${info[i].age}</th>
                <th>${info[i].phoneNumber}</th>
                
                <th   ><i onclick="updateStudentInformation(${i});" style="cursor: pointer;  " class="uil uil-edit-alt"></i></th>
                <th  > <i onclick="deleteStudentInformation(${i});" style="cursor: pointer;" class="uil uil-trash"></i></th>
            </tr>
        `;
        document.getElementById('tbody').innerHTML = table;
        }
    }
}
        



