import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import styles from '../Styles/NavigationStyles';

import HomeScreen from '../Screens/Home';
import MessagesScreen from '../Screens/Messages';
import GroupsScreen from '../Screens/Groups';
import AccountScreen from '../Screens/Account';
import CustomDrawer from '../Components/Drawer/Drawer';
import {DrawerStyles} from '../Styles/drawer.styles';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import NotificationScreen from '../Screens/Notifications/Notifications';
import LoginScreen from '../Screens/Auth/Login';
import SignupScreen from '../Screens/Auth/Signup';
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Account: {screen: AccountScreen},
    Groups: {screen: GroupsScreen},
    Messages: {screen: MessagesScreen},
  },
  {
    initialRouteName: 'Home',
    drawerType: 'slide',
    contentComponent: CustomDrawer,
    resetOnBlur: true,
    contentOptions: {
      labelStyle: DrawerStyles.labelStyle,
      itemStyle: DrawerStyles.itemStyle,
    },
    keyboardDismissMode: 'on-drag',
  },
);

const AppStack = createStackNavigator(
  {
    Drawer: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Notifications: {
      screen: NotificationScreen,
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Drawer',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const SwitchNav = createSwitchNavigator(
  {
    Splash: Splash,
    Onboarding: Onboarding,
    AuthStack: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthStack',
  },
);
export default createAppContainer(SwitchNav);
