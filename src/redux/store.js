import {createStore} from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer); // stores all the reducers

export default store;