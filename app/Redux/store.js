import {createStore} from 'redux';
import userReducer from './reducers/userReducer';

const STORE = createStore(userReducer);
export default STORE;
