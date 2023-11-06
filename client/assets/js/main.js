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

//Sliders
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1240: {
      slidesPerView: 3
    },
    839: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  },
  autoplay: {
    delay: 2000
  }
})

var swiper = new Swiper('.swiper-second', {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  pagination: {
    clickable: true
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },
  loopedSlides: 4,
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50
    }
  }
})

var swiper = new Swiper('.swiper-third', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1240: {
      slidesPerView: 3
    },
    839: {
      slidesPerView: 2
    },
    300: {
      slidesPerView: 1
    }
  },
  autoplay: {
    delay: 2000
  }
})
