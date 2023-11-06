const tabsLink = document.querySelectorAll('.categories-item')
const productsContainer = document.getElementById('products-container')
const subTotal = document.querySelector('.amount')
const bascetCountQuantity = document.querySelector('.count')
let bascetArr = getLocalStorage('bascetArr') || []

//Function save data to LocalStorage
function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

//Function for get data from LocalStorage
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}
//Get Prodcuts Data from FakeApi
async function getProducts() {
  try {
    const response = await axios('http://localhost:3000/products')
    const data = response.data
    createProduct(data)
  } catch (error) {
    console.log(error)
  }
}

let localeLength =  getLocalStorage('bascetArr').length 
bascetCountQuantity.textContent = localeLength

//Create Product Card
function createProductCard(product) {
  const card = document.createElement('div')
  card.classList.add('col-lg-3', 'col-md-6', 'col-sm-6', 'card-category')
  card.setAttribute('data-category', product.category)
  card.innerHTML = `
  <div class="product-card">
    <div class="product-img_box">
      <a href="#" class="product-image__link">
        <img src="${product.images[0]}" class='originalImg' alt="${
    product.name
  }" />
        <img src="${product.images[1]}" class='hoverImg' alt="${
    product.name
  }" />
      </a>
      <div class="product-actions">
        <ul>
          <li><a href="#"><i class="fa-regular fa-eye"></i></a></li>
          <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
          <li ><a href="#" class='add-bascet-btn'><i class="fa-solid fa-basket-shopping"></i></a></li>
        </ul>
      </div>
    </div>
    <div class="product-content">
      <a href="#" class="product-name">${product.name}</a>
      <div class="price">
        <span>${product.price}</span>
      </div>
      <div class="rating">
         <ul>
           ${getRating(product.stars)}
         </ul>
      </div>
    </div>
  </div>
`
  const addToBasketBtn = card.querySelector('.add-bascet-btn')
  addToBasketBtn.addEventListener('click', e => {
    e.preventDefault()
    if (bascetArr.find(x => x.id === product.id)) {
      return
    }
    bascetArr.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      count: 1,
    })

  

    setLocalStorage('bascetArr', bascetArr)

    let localeLength =  getLocalStorage('bascetArr').length 
    bascetCountQuantity.textContent = localeLength
    generateBascetCards()
  })

  return card
}

//Filter by Category
tabsLink.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault()
    const category = tab.getAttribute('data-category')
    console.log(category)
    const cardsCategory = document.querySelectorAll('.card-category')
    cardsCategory.forEach(product => {
      //console.log(product)
      const productCategory = product.getAttribute('data-category')
      product.style.display = productCategory === category ? 'flex' : 'none'
    })
  })
})

//Rating Calculate
function getRating(stars) {
  let starIcon = ''
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      starIcon += '<li><i class="fa-solid fa-star"></i></li>'
    } else {
      starIcon += '<li><i class="fa-regular fa-star"></i></li>'
    }
  }
  return starIcon
}

//Create Product from Data
function createProduct(data) {
  data.forEach(product => {
    const productCard = createProductCard(product)
    productsContainer.append(productCard)
  })
}



//Create Bascet Cards
function createBascetProduct(bascetArrLoc) {
  const bascetContainer = document.querySelector('.bascet-products')
  bascetContainer.innerHTML = ''
  bascetArrLoc.forEach(product => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('bascet-product')
    const totalPrice = (product.price * product.count).toFixed(2)

    productDiv.innerHTML = `
      <a href="#" class="remove-btn">
        <i class="fa-solid fa-x"></i>
      </a>
      <a href="#" class="img-link">
        <img src="${product.image}" alt="${product.name}" />
      </a>
      <div class="bascet-product-content">
        <a href="#" class="product-item">${product.name}</a>
        <span class="product-cost">${product.count} x ${product.price}</span>
        <span class="total-cost">Total: ${totalPrice}</span>
      </div>
      <div class="bascet-counter ms-auto">
        <button class="count-btn" id="decreaseCount" onclick="decreaseCount(${product.id})">-</button>
        <span id="bascetCont">${product.count}</span>
        <button class="count-btn" id="incrementCount" onclick="increaseCount(${product.id})">+</button>
      </div>
    `
    const removeBtn = productDiv.querySelector('.remove-btn')
    removeBtn.addEventListener('click', e => {
      e.preventDefault()
      bascetArr = bascetArr.filter(x => x.id !== product.id)

      bascetCountQuantity.textContent = parseInt(bascetCountQuantity.textContent) - 1
      setLocalStorage('bascetArr', bascetArr)
      generateBascetCards()
    })

    bascetContainer.append(productDiv)
  })
}


//Increase Price
function increaseCount(productId) {
  const product = bascetArr.find(x => x.id === productId)
  if (product) {
    product.count++
    setLocalStorage('bascetArr', bascetArr)
    generateBascetCards()
  }
}

//Deacrease Price

function decreaseCount(productId) {
  const product = bascetArr.find(x => x.id === productId)
  if (product) {
    product.count--
    if (product.count < 0) {
      product.count = 0
    }
    setLocalStorage('bascetArr', bascetArr)
    generateBascetCards()
  }
}

//Calculate Total Price Products
function subTotalCalc(bascetArr) {
  let total = 0
  bascetArr.forEach(product => {
    total += product.price * product.count
  })
  subTotal.textContent = total.toFixed(2)
}

//Generae Bascet
function generateBascetCards() {
  createBascetProduct(bascetArr)
  subTotalCalc(bascetArr)
}

getProducts()
generateBascetCards()
