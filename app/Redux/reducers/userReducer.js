import {REQUEST_STARTED} from '../constants/userConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_STARTED: {
      return {...state};
    }
    default:
      return state;
  }
};
