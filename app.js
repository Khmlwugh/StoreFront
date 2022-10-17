import { renderProduct, renderOptions } from "./utils.js";

//Selectors
const mainContainer = document.querySelector('.main');
const optionContainer = document.querySelector('.category-select')
const url = 'http://127.0.0.1:3000/'
const resetButton = document.querySelector('.header-navbar__btn')


optionContainer.addEventListener('change', onClickOption)

resetButton.addEventListener('click', () => {
  sessionStorage.removeItem('category')
  sessionStorage.removeItem('search')
  location.reload()
})


async function CallAPI(url){
  const response = await fetch(url);
  let data = await response.json()
  return data
}



window.addEventListener('load', () => {
  let search = sessionStorage.getItem('search')
  let category = sessionStorage.getItem('category')
  CallAPI(url+'categories').then(data=> renderOptions(optionContainer, data));
  if (category){
    CallAPI(url + 'categories/' + category).then(data => renderProduct(mainContainer,data))
  }
  else if (search){
    CallAPI(url + 'search?q=' + search).then(data => renderProduct(mainContainer, data));
    console.log(url + '?' + search)
  }else {
    CallAPI(url + 'products').then(data => renderProduct(mainContainer, data))
  }
})

function onClickOption(event){
  sessionStorage.setItem('category', event.target.value);
  console.log(event.target.innerText)
  let option = event.target.innexText
  location.reload()
}


const SearchButton = document.querySelector('.form-button')

SearchButton.addEventListener('click', searchQuery)

function searchQuery(event){
  const SearchQuery = document.querySelector('.form-input');
  sessionStorage.setItem('search', SearchQuery.value);
  SearchQuery.value = '';

}
