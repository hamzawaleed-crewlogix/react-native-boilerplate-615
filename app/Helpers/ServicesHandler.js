import axios from 'axios';

export const getRequest = async (url, token = null) => {
  const config = {headers: {'Content-Type': 'application/json'}};

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  console.log('config.headers GET: ', config.headers);
  try {
    let response = await axios.get(url, config);
    let {data, statusCode, statusMessage} = await response.data;
    if (statusCode === 0) {
      return [data, statusMessage];
    } else {
      throw {message: statusMessage};
    }
  } catch (error) {
    throw error.message;
  }
};

export const postRequest = async (url, parameters, token = null) => {
  const config = {headers: {'Content-Type': 'application/json'}};

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  try {
    const response = await axios.post(url, parameters, config);
    const {data, statusCode, statusMessage} = await response.data;
    if (statusCode === 0) {
      return [data, statusMessage];
    } else {
      throw {message: statusMessage};
    }
  } catch (error) {
    throw error.message;
  }
};

export const postRequestWithFile = async (url, parameters, token = null) => {
  const config = {headers: {'Content-Type': 'multipart/form-data'}};

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  console.log('url is ', url);
  console.log('parameters is ', parameters);
  console.log('config is ', config);

  let formData = new FormData();
  for (var key in parameters) {
    formData.append(key, parameters[key]);
  }

  try {
    let response = await axios.post(url, formData, config);
    let {data, statusCode, statusMessage} = response.data;
    if (statusCode === 0) {
      return [data, statusMessage];
    } else {
      throw {message: statusMessage};
    }
  } catch (error) {
    throw error.message;
  }
};
