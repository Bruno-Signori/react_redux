import { AxiosResponse } from 'axios';
import {all, call, put, select, takeLatest} from 'redux-saga/effects';
import { iState } from '../..';
import api from '../../../services/api';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';

// estou tipando como é o retorno la dentro das actions; entao desistruturo o retorno e ja temos acesso a payload por ex;
type CheckProductStockreqeust = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

// estou add um interceptador, para neste caso vereficar se o produto possui uma quantidade em estoque;
function* checkProductStock({ payload }:CheckProductStockreqeust) {
  const {product} = payload;

  const currentQuantity: number = yield select((state: iState) => {
    // aqui estou procurando (find) para ver se o produto ja esta no carrinho 
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });
  
  // qualquer promise que eu queira excutar vai dentro do call
  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
   yield put(addProductToCartSuccess(product));
   
    // console.log('deu certo!')
  } else {
    yield put(addProductToCartFailure(product.id));
  }
  
  //console.log(currentQuantity);
  //console.log(payload);
  //console.log('add to cart');
}


export default all([
  // pegando qual chamada foi feita, para ai sim executar a função do saga
  //takeLatest serve para que sempre pegue apenas a ultima requisição, sendo que mesmo que ousuario click multiplas vezes sem resposta do server, a ultima seja executada.
  // takeLeading.. serve para aguardar sempre a primeira
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])