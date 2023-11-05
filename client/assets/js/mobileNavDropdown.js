const mobileNavBtn = document.querySelectorAll('.mobile-nav__link')
const subMenuDropDown = document.querySelectorAll('.sub-menu')
const barBtn = document.getElementById('nav-menu')
const navMenu = document.querySelector('.sidebar-nav')
const overlayMenu = document.querySelector('.overlay')
const closeBtn = document.getElementById('closeBtn')

mobileNavBtn.forEach((item, index) => {
  item.addEventListener('click', e => {
    subMenuDropDown.forEach((element, i) => {
      if (index === i) {
        subMenuDropDown[i].classList.toggle('active')
      } else {
        subMenuDropDown[i].classList.remove('active')
      }
    })
  })
})

barBtn.addEventListener('click', e => {
  navMenu.classList.remove('d-none')
  navMenu.classList.add('d-block')
  overlayMenu.classList.add('active')
})

closeBtn.addEventListener('click', e => {
  navMenu.classList.add('d-none')
  overlayMenu.classList.remove('active')
})
