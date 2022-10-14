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
    const ProductDiv = document.createElement('div');
    ProductDiv.classList.add('product');
    ProductDiv.innerText = product.name
    container.appendChild(ProductDiv);
  })
}

window.addEventListener('load', () => {
  CallAPI(url).then(data => renderProduct(mainContainer, data))  
})