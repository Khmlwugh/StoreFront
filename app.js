import { renderProduct, renderOptions } from "./utils.js";

//Selectors
const mainContainer = document.querySelector('.main');
const optionContainer = document.querySelector('.category-select')

let url = 'http://127.0.0.1:3000/'


async function CallAPI(url){
  const response = await fetch(url);
  let data = await response.json()
  return data
}

function showCategory(){
  let url = 'http://127.0.0.1:3000/categories'
  CallAPI(url).then()
}

window.addEventListener('load', () => {
  let search = sessionStorage.getItem('search')
  CallAPI(url+'categories').then(data=> renderOptions(optionContainer, data));

  if (search){
    CallAPI(url + 'search?q=' + search).then(data => renderProduct(mainContainer, data));
    console.log(url + '?' + search)
  } else {
    CallAPI(url + 'products').then(data => renderProduct(mainContainer, data))
  }


})


const SearchButton = document.querySelector('.form-button')

SearchButton.addEventListener('click', searchQuery)

function searchQuery(event){
  const SearchQuery = document.querySelector('.form-input');
  sessionStorage.setItem('search', SearchQuery.value);
  SearchQuery.value = '';

}
