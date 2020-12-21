import {all} from 'redux-saga/effects';


import cart from './cart/sagas';

// sempre que usamos Promisses => async/wait estas sao transformadas em functions*  (sao chamadas de generators);
// yeld seria um wait

export default function* rootSaga() {
  return yield all([
    cart,
  ])
}