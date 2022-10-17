export function renderProduct(container, array){
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



export function renderOptions(container, array){
  array.forEach( category => {
    
    //Element creation
    const option = document.createElement('option')
    option.classList.add('select-option')
    option.value = category.id
    option.innerText = category.name
    container.appendChild(option)
    }
  )
}