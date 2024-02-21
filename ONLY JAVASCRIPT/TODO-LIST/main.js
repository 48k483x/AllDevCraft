var newTask = document.getElementById('newTask'),
editButton = document.getElementById('edit'),
deleteButton = document.getElementById('delete'),
todoSection = document.getElementById('sc'),
bottomAll = document.getElementById('bottom'),
clickk = document.getElementById('cl');




    let tasks=[
        {
            "title": "manzal",
        },
        
    ];

    function FillTasksOnThePage() {
        
        for(el of tasks) {
            let content = 
            `
                <div id="sc">
                    <h1>${el.title}</h1>
                    <button id="edit"><i class="fa-solid fa-pen"></i></button> 
                    <button id="delete"> <i class="fa-sharp fa-solid fa-trash"></i></button>
                </div>
            `;
            bottomAll.innerHTML += content;
        }
    }


    clickk.onclick = function(){
        var PromptValue = prompt("Whats Your Task ? ");
        var taskObj =  {
            "title": PromptValue
        }
        tasks.push(taskObj);
        FillTasksOnThePage();
    }