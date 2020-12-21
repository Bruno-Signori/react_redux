import {createStore} from 'redux';
import cart from './modules/cart/reducer'
import rootreducer from './modules/rootreducer';
const store = createStore(rootreducer);

export default store;
