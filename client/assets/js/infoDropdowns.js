const moneyDropdown = document.querySelector(".money-dropdown");
const languageDropdown = document.querySelector(".language-dropdown");
const languageBtn = document.querySelector(".language-btn");
const dolarBtn = document.querySelector(".dolar-btn");
const sideBarBtn = document.querySelectorAll(".siderbar-btn");
const sideBarMoneyDropdown = document.querySelector('.siderbar-money')
const sideBarLanguageDropdown = document.querySelector('.siderbar-language')
const sideBarAccountDropdown = document.querySelector('.siderbar-account')

//Btns click event
dolarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (languageDropdown.classList.contains("show")) {
    languageDropdown.classList.remove("show");
  }
  moneyDropdown.classList.toggle("show");
});

languageBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (moneyDropdown.classList.contains("show")) {
    moneyDropdown.classList.remove("show");
  }
  languageDropdown.classList.toggle("show");
});

sideBarBtn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    if (btns.classList.contains("dolar-btn")) {
      if (sideBarLanguageDropdown.classList.contains("show") || sideBarAccountDropdown.classList.contains("show")) {
        sideBarLanguageDropdown.classList.remove("show");
        sideBarAccountDropdown.classList.remove("show");
      }
      sideBarMoneyDropdown.classList.toggle("show")
    }
    if (btns.classList.contains("language-btn")) {
      if (sideBarMoneyDropdown.classList.contains("show") || sideBarAccountDropdown.classList.contains("show")) {
        sideBarMoneyDropdown.classList.remove("show");
        sideBarAccountDropdown.classList.remove("show");
      }
      sideBarLanguageDropdown.classList.toggle("show")
    }
    if (btns.classList.contains("account-btn")) {
      if (sideBarLanguageDropdown.classList.contains("show") || sideBarMoneyDropdown.classList.contains("show")) {
        sideBarLanguageDropdown.classList.remove("show");
        sideBarMoneyDropdown.classList.remove("show");
      }
      sideBarAccountDropdown.classList.toggle("show")
    }
  });
});

//When click outside remove class show
window.addEventListener("click", () => {
  if (languageDropdown.classList.contains("show")) {
    languageDropdown.classList.remove("show");
  }
  if (moneyDropdown.classList.contains("show")) {
    moneyDropdown.classList.remove("show");
  }
  
});
