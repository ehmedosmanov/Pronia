const moneyDropdown = document.querySelector('.money-dropdown')
const languageDropdown = document.querySelector('.language-dropdown')
const languageBtn = document.getElementById('languageBtn')
const dolarBtn = document.getElementById('dolarBtn')

dolarBtn.addEventListener('click', e => {
  e.stopPropagation()
  if (languageDropdown.classList.contains('show')) {
    languageDropdown.classList.remove('show')
  }
  moneyDropdown.classList.toggle('show')
})

languageBtn.addEventListener('click', e => {
  e.stopPropagation()
  if (moneyDropdown.classList.contains('show')) {
    moneyDropdown.classList.remove('show')
  }
  languageDropdown.classList.toggle('show')
})

window.addEventListener('click', () => {
  if (languageDropdown.classList.contains('show')) {
    languageDropdown.classList.remove('show')
  }
  if (moneyDropdown.classList.contains('show')) {
    moneyDropdown.classList.remove('show')
  }
})
