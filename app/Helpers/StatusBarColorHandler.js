import {StatusBar, Platform} from 'react-native';
import COLORS from '../Theme/Colors';

const StatusBarColorHandler = routeName => {
  if (routeName === 'Lang') {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#2b2b2b');
    }
    StatusBar.setBarStyle('light-content');
  } else if (routeName === 'Login' || routeName === 'Signup') {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#fff');
    }
    StatusBar.setBarStyle('dark-content');
  } else {
    console.log('setting header color');
    StatusBar.setBackgroundColor(COLORS.primary);
    StatusBar.setBarStyle('light-content');
  }
};

export default StatusBarColorHandler;
