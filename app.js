fetch('http://127.0.0.1:3000/products')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))


//Selector
const mainContainer = document.querySelector('.main');

