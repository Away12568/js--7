const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")


burger.onclick = () => {
    menu.classList.toggle("open")
}

const openModel = document.querySelector(".open-modal")
const closeModal = document.querySelector(".close-modal")
const modal = document.querySelector(".modal")

openModel.onclick = () => {
    modal.classList.add("opened")
}

closeModal.onclick = () => {
    modal.classList.remove("opened")
}