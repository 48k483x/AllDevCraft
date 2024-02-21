let   Put = document.getElementById('Put')     ;
let   addBtn = document.getElementById('add')  ;
let   tasks = document.querySelector('.tasks') ; 


Put.onkeyup = () =>{
    if(Put.value.trim() !== ''){
        addBtn.classList.add('active');
    }else {
        addBtn.classList.remove('active');
    }
}

// add tasks

addBtn.onclick = () =>{
    if(Put.value.trim() !== ''){
        let newTask = document.createElement('div');
        newTask.classList.add('item');

        newTask.innerHTML = 
            `
            <p> ${Put.value} </p>
                <div class="item-btn">
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                </div>
            `
            tasks.appendChild(newTask);
            Put.value = '';
    }else{
        alert('Please Enter a Task');
    }

};

// remove tasks

tasks.onclick = (e) =>{
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }

    if(e.target.classList.contains('fa-pen-to-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
    
    };


