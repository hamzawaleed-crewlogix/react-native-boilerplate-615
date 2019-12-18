import {Alert, BackHandler} from 'react-native';
import StatusBarColorHandler from './StatusBarColorHandler';

var routeN;
export const BackButtonHandler = () => {
  if (routeN === 'HomeScreen') {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  } else {
    return false;
  }
};

const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  const {routeName, params} = route;

  console.log('routeName', routeName);
  return {routeName, params};
};

const NavigationStateHandler = (prevState, currentState) => {
  const currentScreen = getCurrentRouteName(currentState);
  const prevScreen = getCurrentRouteName(prevState);
  if (prevScreen.routeName !== currentScreen.routeName) {
    routeN = currentScreen.routeName;
    StatusBarColorHandler(currentScreen.routeName);
  }
};

export {getCurrentRouteName, NavigationStateHandler};
