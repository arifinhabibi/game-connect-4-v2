const info = document.querySelector('.info')
const information = document.querySelector('.information')
const cancel = document.querySelector('.cancel')

info.addEventListener('click', () => {
    information.style.display = 'block'
})

cancel.addEventListener('click', () => {
    information.style.display = 'none'
})