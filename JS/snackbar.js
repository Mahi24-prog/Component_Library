const snackbarExample = document.querySelector(".snackbar-bottom");
const btnToShowSnackbar = document.querySelector(".snackbar-show-btn");
const btnToCloseSnacknbar = document.querySelector(".snackbar-close-btn");

let timerIdForToast;
btnToShowSnackbar.addEventListener("click", ()=>{
    snackbarExample.style.display = "flex";
    timerIdForSnackbar = setTimeout(()=>{
        snackbarExample.style.display = "none";  
    },2000)
})
btnToCloseSnacknbar.addEventListener("click", ()=>{
    clearTimeout(timerIdForSnackbar);
    snackbarExample.style.display = "none"; 
})