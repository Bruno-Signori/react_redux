import {all, takeLatest} from 'redux-saga/effects';

// estou add um interceptador, para neste caso vereficar se o produto possui uma quantidade em estoque;
function checkProductStock() {
  console.log('add to cart')
}


export default all([
  // pegando qual chamada foi feita, para ai sim executar a função do saga
  //takeLatest serve para que sempre pegue apenas a ultima requisição, sendo que mesmo que ousuario click multiplas vezes sem resposta do server, a ultima seja executada.
  // takeLeading.. serve para aguardar sempre a primeira
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])