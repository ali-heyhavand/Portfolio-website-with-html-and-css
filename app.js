const btn = document.querySelector('.logo-menu')
const offcanves =  document.querySelector('.offcanves')

btn.addEventListener('click' , () => {
    offcanves.classList.toggle('show')
})
