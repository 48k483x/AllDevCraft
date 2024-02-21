clickk.onclick = function () {
    Todo = prompt("Whats Your Task ? ");
    bottomAll.innerHTML += `
    <br /><div id='sc'>
    <h1>${Todo} </h1>
    <button class="edit"><i class="fa-solid fa-pen"></i></button>
     <button class="delete"> <i class="fa-sharp fa-solid fa-trash"></i></button>
     </div> 
     
    `;
    storeData(Todo);
   
}
showData();



var data = [];

function storeData() {
    data.push({
        title:Todo,
    });
    localStorage.setItem('to_do', JSON.stringify(data));
}

function showData(){
    if (data.length !== null){
    for(var i = 0; i < data.length; i++) {
        bottomAll.innerHTML += `
        <br /><div id='sc'>
        <h1>${data[i].title} </h1>
        <button  class="edit"><i class="fa-solid fa-pen"></i></button>
         <button  onclick='deleteTasks(${i});' class="delete"> <i class="fa-sharp fa-solid fa-trash"></i></button>
         </div> 
         
        `;
        
   
    }
}
};