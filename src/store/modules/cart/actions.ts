import {ActionTypes, IProduct} from './types';


export function addProductToCartRequest(product: IProduct) {
// USAR EXPRESSOES BEM DESCRITIVAS
  return {
    type: ActionTypes.AddProductToCartRequest,
    //no payload passo a informações contidas no que estamos addicionando
    payload:{
      product,
    }
  };
}

export function addProductToCartSuccess(product: IProduct) {
  // USAR EXPRESSOES BEM DESCRITIVAS
    return {
      type: ActionTypes.AddProductToCartSuccess,
      //no payload passo a informações contidas no que estamos addicionando
      payload:{
        product,
      }
    };
  }
  
export function addProductToCartFailure(productId: number) {
  // USAR EXPRESSOES BEM DESCRITIVAS
    return {
      type: ActionTypes.AddProductToCartFailure,
      //no payload passo a informações contidas no que estamos addicionando
      payload:{
        productId,
      }
    };
  }