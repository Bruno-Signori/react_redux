import {createStore, applyMiddleware} from 'redux';
import cart from './modules/cart/reducer'
import { ICartState } from './modules/cart/types';
import rootreducer from './modules/rootreducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

// Aqui apenas estou tipando as informaçoes de estado do reducer;
export interface iState{
    cart: ICartState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootreducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)),
  );

  sagaMiddleware.run(rootSaga);

export default store;
