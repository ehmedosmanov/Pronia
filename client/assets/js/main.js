//Bascet Side Bar
const bascetSideBar = document.querySelector('.bascet-sidebar')
const bascetBtn = document.querySelector('.bascet-link')
const closeBascetBtn = document.querySelector('.button-close')

closeBascetBtn.addEventListener('click', e => {
  e.preventDefault()

  bascetSideBar.classList.toggle('active')
})

bascetBtn.addEventListener('click', e => {
  e.preventDefault()
  bascetSideBar.classList.toggle('active')
})
