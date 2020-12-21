import {IProduct} from './types';


export function addProductToCart(product: IProduct) {
// USAR EXPRESSOES BEM DESCRITIVAS
  return {
    type: 'ADD_PRODUCT_TO_CART',
    //no payload passo a informações contidas no que estamos addicionando
    payload:{
      product,
    }
  };
}