let usrBtn = document.getElementById('userName');
let cont = document.querySelector('.TBody')

function GetPostData(userId){
    let request = new XMLHttpRequest(userId);
    request.open("GET" , `https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    request.send();
    request.responseType = "json";
    request.onload = ()=>{
        if(request.status >= 200 && request.status < 300){
            let posts = request.response;
            cont.innerHTML = '';
            for(const post of posts){
                cont.innerHTML += `<div class="TBody"> <h3>${post.title}</h3>
                <p>${post.body}</p></div>`
                
            }
        }else{alert('error' + request.status)}
             
    }
}

function GetUsers(){
    let request = new XMLHttpRequest();
    request.open("GET" , `https://jsonplaceholder.typicode.com/users`);
    request.send();
    request.responseType = "json";
    request.onload = ()=>{
        if(request.status >= 200 && request.status < 300){
            let users = request.response;
            usrBtn.innerHTML = '';
            for(const user of users){
                usrBtn.innerHTML += `<div class="TBody"> <h3>${user.name}</h3>
                <p>${user.email}</p></div>`
                
            }
        }else{alert('error' + request.status)}
             
    }
}GetUsers();