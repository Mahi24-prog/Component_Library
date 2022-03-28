const modalCard = document.querySelector(".modal-card")
const modalActiveBtn = document.querySelector(".modal-active-btn")
const hideModalBtn = document.querySelectorAll(".hide-modal-btn")

modalActiveBtn.addEventListener("click", () => {
    modalCard.classList.add("active-modal");
    document.body.style.backgroundColor = "gray";
})


hideModalBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        modalCard.classList.remove("active-modal");
        document.body.style.backgroundColor = "white";
    })
})


