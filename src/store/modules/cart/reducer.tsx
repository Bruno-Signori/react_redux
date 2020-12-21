import { Reducer } from "redux";
import { ICartState } from "./types";
import produce from 'immer';


// seto um valor inicial para o state 
// immer (produce) serve para produzir um state apartir de um rascunho feito ateriormente, diminui a verbosidade do codigo(não preciso ficar passando ...state em todas as actions) 
const INITIAL_STATE: ICartState = {
  items: []
}
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const {product} = action.payload;

      const productInCartIndex = draft.items.findIndex(item => 
        item.product.id === product.id,
        );
        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity ++;
        } else {
          draft.items.push({
            product,
            quantity: 1, 
          });

        }
        break;
      }
      // na pratica o produce faz o mesmo que as demais linhas abaixo;
        // aqui preciso passar o state com o estatdo antigo para depois setar o estado atual...
            // return {
              // ...state,
              // items : [
                //  ...state.items,
                // {
                  //  product,
                  // quantity: 1,
                // }
              // ]
            // };
    default: {
      return draft;

    }
  }
});

}
export default cart;