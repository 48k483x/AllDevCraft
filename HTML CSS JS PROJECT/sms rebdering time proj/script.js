const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
WifiIcon = wrapper.querySelector(".icon"),
title = wrapper.querySelector("span"),
subTitle = wrapper.querySelector("p"),
CloseIcon = wrapper.querySelector(".close-icon");


window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();  //crating new xml object
        xhr.open("GET" , "https://jsonplaceholder.typicode.com/posts" ,true);
        xhr.onload = ()=>{
            if(xhr.status === 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "You're online";
                subTitle.innerText = "Hurray ! Internet is connected.";
                WifiIcon.innerHTML = '<i class="uil uil-wifi">'
               
               
               
                CloseIcon.onclick = ()=>{
                    wrapper.classList.add("hide");
                }


                setTimeout( ()=>{
                    wrapper.classList.add("hide");
                } , 10000)

            }else{
                offline();
            }
        }
            
        
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send();
    }
    function offline(){
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "You're offline now";
        subTitle.innerText = "Opps! Internet is disconnected";
        WifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
    }

    setInterval( ()=>{
        ajax();
    },100); // 100ms
}