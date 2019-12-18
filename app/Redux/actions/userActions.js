import {Platform} from 'react-native';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {REQUEST_STARTED} from '../constants/userConstants';
import API from '../../Constants/urlPaths';
export const requestStartedAct = type => ({
  type: REQUEST_STARTED,
  loading: type,
});
// export const loginUserAct = user => ({
//   type: REQUEST_SUCCESS,
//   user: user,
// });
// export const logoutUserAct = () => ({
//   type: LOGOUT_USER,
// });
// export const requestFailedAct = (errorType, error) => ({
//   type: REQUEST_FAILED,
//   errorType,
//   error,
// });
const setTokenInHeaders = async token => {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const signupUser = formData => {
  return dispatch => {
    const {provider} = formData;
    if (!provider) {
      dispatch(requestStartedAct('Email'));
    }
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    Axios.post(API.register, formDataObj)
      .then(data => {
        let userData = data.data.response.data;
        userData = {...userData.user, token: userData.token};
        setTokenInHeaders(userData.token);
        AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
          // dispatch(loginUserAct(userData)),
        });
      })
      .catch(err => {
        console.log('CATCH IN SIGNUP', err);
        // dispatch(requestFailedAct(err.response.data.response.errors));
      });
  };
};
const updateUser = (
  formData,
  navigation = null,
  oldUser,
  avatar_location = null,
) => {
  const config = {headers: {'Content-Type': 'multipart/form-data'}};

  return dispatch => {
    dispatch(requestStartedAct('Email'));
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    if (avatar_location) {
      console.log('avatar_location', avatar_location.uri.split('/').pop());
      formDataObj.append('avatar_location', {
        name: avatar_location.fileName || avatar_location.uri.split('/').pop(),
        type: avatar_location.type,
        uri:
          Platform.OS === 'android'
            ? avatar_location.uri
            : avatar_location.uri.replace('file://', ''),
      });
    }
    console.log('Sending uPDAATE REQUEST with params:-----', formDataObj);
    Axios.post(API.update, formDataObj, config)
      .then(data => {
        console.log('UPDATE RESPONSE---------', data);
        let userData = data.data.response.data;
        userData = {...userData.user, token: oldUser.token};
        AsyncStorage.setItem('user', JSON.stringify(userData)).then(() => {
          // dispatch(loginUserAct(userData));
        });
        navigation ? navigation.goBack() : null;
      })
      .catch(err => {
        console.log('ERROR IN UPDTE PROFILE', err);
        // alert(err.response.data.response.message);
        // dispatch(requestFailedAct('Error while update profile!'));
      });
  };
};

const loginUser = formData => {
  return dispatch => {
    dispatch(requestStartedAct('Login'));
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    Axios.post(API.login, formDataObj)
      .then(data => {
        let userData = data.data.response.data;
        const responseCode = data.data.responseCode;
        if (responseCode === 200) {
          setTokenInHeaders(userData.token);
          userData = {...userData.user, token: userData.token};
          AsyncStorage.setItem('user', JSON.stringify(userData)).then(() =>
            dispatch(loginUserAct(userData)),
          );
        } else {
          // dispatch(
          //   requestFailedAct(
          //     'LoginError',
          //     'Invalid credentials, Please retry.',
          //   ),
          // );
        }
      })
      .catch(err => {
        // alert(err.response.data.response.message);
        // errorHandler(err.response.responseCode);
        // dispatch(
        //   requestFailedAct('LoginError', 'Invalid credentials, Please retry.'),
        // );
      });
  };
};
const logoutUser = (formData, navigation) => {
  return dispatch => {
    dispatch(requestStartedAct('Logout'));
    let formDataObj = new FormData();
    for (var key in formData) {
      formDataObj.append(key, formData[key]);
    }
    Axios.get(API.logout, formDataObj)
      .then(() => {
        AsyncStorage.removeItem('user').then(() => {
          // dispatch(logoutUserAct());
        });
        navigation.navigate('News');
      })
      .catch(err => {
        console.log('ERORRR in logout', err);
        // dispatch(requestFailedAct(err));
      });
  };
};
export {signupUser, updateUser, loginUser, logoutUser};
