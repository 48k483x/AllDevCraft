function GetPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then(response => {
        if(response.ok){
            return response.json()
        }
    })
    .then(posts => {
        document.getElementById('posts').innerHTML  ="";
        for(const post of posts){
            let content = `
            <div id="post">
                <h3>${post.title}</h3>
                <hr>
                <p>${post.body}</p>
            </div>
                       `
        document.getElementById('posts').innerHTML  += content
        }
    });
    
    
    
    
    
    //let request = new XMLHttpRequest();
    //request.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    //request.responseType = "json";
    //request.send();
    //request.onload = ()=>{
       // if(request.status >= 200 && request.status < 300){
          //  let posts = request.response;
         //   document.getElementById('posts').innerHTML  ="";
          //  for(const post of posts){
            //    let content = `
          //      <div id="post">
             //       <h3>${post.title}</h3>
             //       <hr>
             //       <p>${post.body}</p>
             //   </div>
               //            `
           // document.getElementById('posts').innerHTML  += content
           // }
       // }else{alert('error' + request.status)}
    //}
}
function GetUsers() {
    return new Promise(function(resolve,reject){
        fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(response.ok){
            return response.json()
        }else{
            reject('error in response ' + response.status)
        }
    })
    .then(users => {
        document.getElementById('user').innerHTML  ="";
        for(const user of users){
            let content = `
            <div id="user1" onclick="userClicked(${user.id} ,this)">
                <h3>${user.name}</h3>
                <h3>${user.email}</h3>
            </div>
                       `
        document.getElementById('user').innerHTML  += content
        }
        resolve();
    });
    })

    //let request = new XMLHttpRequest();
    //request.open("GET", "https://jsonplaceholder.typicode.com/users")
    //request.responseType = "json";
    //request.send();
    //request.onload = ()=>{
    //    if(request.status >= 200 && request.status < 300){
    //        let users = request.response;
    //        document.getElementById('user').innerHTML  ="";
    //        for(const user of users){
    //            let content = `
    //            <div id="user1" onclick="userClicked(${user.id} ,this)">
    //                <h3>${user.name}</h3>
    //                <h3>${user.email}</h3>
    //            </div>
    //                       `
    //        document.getElementById('user').innerHTML  += content
    //        }
    //    }else{alert('error' + request.status)}
    //}
}



GetUsers()
.then(()=>{
    GetPosts(1)
})
.catch((error)=>{
    console.log(error)
})



function userClicked(id , el){
    GetPosts(id);

    let selected = document.getElementsByClassName('selected')
    for(element of selected){
        element.classList.remove('selected')
    }
    el.classList.add('selected')
}