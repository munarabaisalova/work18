const btn = document.querySelector(".hero--modal__btn")
btn.addEventListener("click", () => {
    document.querySelector(".hero--modal").style.display = "block"
})

const close = document.querySelector(".hero--modal__iks--text")
close.addEventListener("click", () => {
    document.querySelector(".hero--modal").style.display = "none"
})