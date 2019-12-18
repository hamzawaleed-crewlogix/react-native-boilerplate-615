import {StatusBar} from 'react-native';

const StatusBarColorHandler = routeName => {
  if (routeName === 'Lang') {
    StatusBar.setBackgroundColor('#2b2b2b');
    StatusBar.setBarStyle('light-content');
  } else if (routeName === 'Login' || routeName === 'Signup') {
    StatusBar.setBackgroundColor('#fff');
    StatusBar.setBarStyle('dark-content');
  } else {
    console.log('setting header color');

    // StatusBar.setBackgroundColor(primaryColor);
    StatusBar.setBarStyle('light-content');
  }
};

export default StatusBarColorHandler;
