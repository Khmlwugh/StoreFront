//Selectors
const mainContainer = document.querySelector('.main');

let url = 'http://127.0.0.1:3000/products'


async function CallAPI(url){
  const response = await fetch(url);
  let data = await response.json()
  return data
}



function renderProduct(container, array){
  array.forEach(product => {

    //Elements creation
    const ProductContainer = document.createElement('div');
    const ProductName = document.createElement('div');
    const ProductImage = document.createElement('img')
    const ProductPriceContainer = document.createElement('div');
    const ProductPrice = document.createElement('div');
    const PurchaseIcon = document.createElement('i')


    //Adding classes and attributes to elements
    ProductContainer.classList.add('product-container')
    ProductImage.src = product.url_image;
    ProductImage.classList.add('product-image');
    ProductName.classList.add('product-name');
    ProductName.innerText = product.name;
    
    ProductPriceContainer.classList.add('product-price-container')
    ProductPrice.classList.add('product-price')
    PurchaseIcon.classList.add('purchase-ícon')
    PurchaseIcon.classList.add('ri-shopping-cart-line')
    ProductPrice.innerText = '$' + product.price;

    //Appending children to the Product Container
    ProductContainer.appendChild(ProductImage);
    ProductContainer.appendChild(ProductName);
    ProductContainer.appendChild(ProductPriceContainer)

    //

    ProductPriceContainer.appendChild(ProductPrice)
    ProductPriceContainer.appendChild(PurchaseIcon)

    //Appending Product Container to Main Container
    container.appendChild(ProductContainer);
  })
}

window.addEventListener('load', () => {
  CallAPI(url).then(data => renderProduct(mainContainer, data))  
})