import {createStore} from 'redux';
import reducer from './reducers/myReducer';

const store = createStore(reducer);
export default store;
