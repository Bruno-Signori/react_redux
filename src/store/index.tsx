import {createStore} from 'redux';
import cart from './modules/cart/reducer'
import { ICartState } from './modules/cart/types';
import rootreducer from './modules/rootreducer';
import {composeWithDevTools} from 'redux-devtools-extension';

// Aqui apenas estou tipando as informaçoes de estado do reducer;
export interface iState{
    cart: ICartState;
}

const store = createStore(
  rootreducer,
  composeWithDevTools()
  );

export default store;
