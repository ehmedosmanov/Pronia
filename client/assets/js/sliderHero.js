const sliderImg = document.getElementById('sliderImg')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const leftSide = document.getElementById('leftSide')

const sliderPhotoArr = [
  'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png',
  'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png'
]

let currentImgIndex = 0

//Mousemove Animation
document.body.addEventListener('mousemove', event => {
  const x = Math.floor(event.clientX / 100) * 1.5
  const y = Math.floor(event.clientY / 100) * 1.5

  sliderImg.style.transform = `translate(${-x}px, ${-y}px)`
})

//Slider
function changeImage() {
  sliderImg.style.opacity = 0
  leftSide.style.opacity = 0
  setTimeout(() => {
    leftSide.style.opacity = 1
  }, 700)

  setTimeout(() => {
    sliderImg.setAttribute('src', sliderPhotoArr[currentImgIndex])
    sliderImg.style.opacity = 1
  }, 1200)
}

// Next button click
nextBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % sliderPhotoArr.length
  changeImage()
})

// Prev button click
prevBtn.addEventListener('click', () => {
  currentImgIndex =
    (currentImgIndex - 1 + sliderPhotoArr.length) % sliderPhotoArr.length
  changeImage()
})

setInterval(() => {
  prevBtn.click()
}, 6000)
