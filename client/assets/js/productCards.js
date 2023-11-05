const tabsLink = document.querySelectorAll('.categories-item')
const productsContainer = document.getElementById('products-container')

async function getProducts() {
  try {
    const response = await axios('http://localhost:3000/products')
    const data = response.data
    createProduct(data)
  } catch (error) {
    console.log(error)
  }
}

//
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
          <li><a href="#"><i class="fa-solid fa-basket-shopping"></i></a></li>
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
      console.log(product)
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

function createProduct(data) {
  data.forEach(product => {
    // console.log(product)
    const productCard = createProductCard(product)
    // console.log(productCard)
    productsContainer.appendChild(productCard)
  })
}

getProducts()
