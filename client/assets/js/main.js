const moneyDropdown = document.querySelector('.money-dropdown')
const languageDropdown = document.querySelector('.language-dropdown')
const languageBtn = document.getElementById('languageBtn')
const dolarBtn = document.getElementById('dolarBtn')

dolarBtn.addEventListener('click', e => {
  if (languageDropdown.classList.contains('show')) {
    languageDropdown.classList.remove('show')
  }
  console.log(e.target)
  moneyDropdown.classList.toggle('show')
})

languageBtn.addEventListener('click', e => {
  if (moneyDropdown.classList.contains('show')) {
    moneyDropdown.classList.remove('show')
  }
  console.log(e.target)
  languageDropdown.classList.toggle('show')
})
