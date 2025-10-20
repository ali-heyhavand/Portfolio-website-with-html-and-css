const btnMenu = document.querySelector('.logo-menu')
const offcanves = document.querySelector('.offcanves')
btnMenu.addEventListener('click' , () => {
    offcanves.classList.toggle('show')
})