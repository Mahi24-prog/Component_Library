const sidebarBtns = document.querySelectorAll(".sidebar-btn")
const components = document.querySelectorAll(".component")
const toggleBtn = document.querySelector(".toggle-btn")
const sidebar = document.querySelector(".sidebar")
const mainContainer = document.querySelector(".main-container")

const showComponent = (evt,id)=>{
    window.scrollTo(0, 0);
    components.forEach(element => {
        element.classList.remove("active-component")
    });

    sidebarBtns.forEach(element => {
        element.classList.remove("active-side-btn")
    });
    document.getElementById(id).className += " active-component"
    console.log(screen.width)
    
}

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle("sidebar-active");
    mainContainer.classList.toggle("main-full-scr");
})


