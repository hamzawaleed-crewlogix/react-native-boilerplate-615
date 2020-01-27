import {Platform} from 'react-native';

const productionAndroid = 'http://myapp.com/';
const productionIOS = 'http://myapp.com';
const mode = {
  developement: 'http://10.200.10.33:8001/',
  QA: 'http://10.200.10.33:9001/',
  production: Platform.OS === 'android' ? productionAndroid : productionIOS,
};

const apiURL = 'api/';

const baseURL = mode.developement; //Change development mode

const API = {
  loginUser: baseURL + apiURL + 'Users/LoginUser',
};

export default API;
