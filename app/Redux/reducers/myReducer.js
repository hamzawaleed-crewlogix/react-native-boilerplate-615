export default (state = {cartCount: 0}, action) => {
  switch (action.type) {
    case 'SET_NOTIF':
      return {notificationData: action.notificationData};
    case 'SET_LANG_&_CACHE':
      return {
        ...state,
        lang: action.lang,
        cache: action.cache,
      };
    default:
      return state;
  }
};
