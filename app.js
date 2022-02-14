const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')
const overlay = document.querySelector('.overlay')

btnOpen.addEventListener('click', ()=> {
    console.log("me esta esucuchando")
    overlay.classList.add('open-modal')
})

btnClose.addEventListener('click', ()=> {
    overlay.classList.remove('open-modal')
})