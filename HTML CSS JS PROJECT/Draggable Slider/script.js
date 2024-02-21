const tabsbox = document.querySelector(".tabs-box"),
alltabs = document.querySelectorAll(".tab")
arrowIcons = document.querySelectorAll(".icon i");



let isDragging = false;

const hIcons =  ()=> {
    let scrollVal = Math.round(tabsbox.scrollLeft);
    let maxScrollableWidth = tabsbox.scrollWidth - tabsbox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal  ? "flex" : "none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        tabsbox.scrollLeft += icon.id === "left" ? -350 : 350;
        setTimeout(() => hIcons(), 50)
    });
});

alltabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabsbox.querySelector(".active").classList.remove("active");
      tab.classList.add("active");
    });
});



const dragging = (e) =>{
    if(!isDragging) return;
    tabsbox.classList.add("dragging")
    tabsbox.scrollLeft -= e.movementX;
}

const dragStop = ()=>{
    let isDragging = false;
    tabsbox.classList.remove("dragging")
}
tabsbox.addEventListener("mousedown" , ()=> isDragging = true);
tabsbox.addEventListener("mousemove" , dragging);
document.addEventListener("mouseup" , dragStop)