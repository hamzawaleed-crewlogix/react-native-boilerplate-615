import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import styles from '../Styles/NavigationStyles';
import {
  Home,
  Account,
  Groups,
  Messages,
  Drawer,
  Notifications,
} from '../Constants/Routes';
import HomeScreen from '../Screens/Home';
import MessagesScreen from '../Screens/Messages';
import GroupsScreen from '../Screens/Groups';
import AccountScreen from '../Screens/Account';
import CustomDrawer from '../Components/Drawer/index';
import {DrawerStyles} from '../Styles/drawer.styles';
import Splash from '../Screens/Splash';
import Onboarding from '../Screens/Onboarding';
import NotificationScreen from '../Screens/Notifications/Notifications';
const DrawerNavigator = createDrawerNavigator(
  {
    [Home]: {screen: HomeScreen},
    [Account]: {screen: AccountScreen},
    [Groups]: {screen: GroupsScreen},
    [Messages]: {screen: MessagesScreen},
  },
  {
    initialRouteName: Home,
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
    [Drawer]: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null,
      },
    },
    [Notifications]: {
      screen: NotificationScreen,
    },
  },
  {
    initialRouteName: Drawer,
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

const SwitchNav = createSwitchNavigator({
  Splash: Splash,
  Onboarding: Onboarding,
  App: AppStack,
});
export default createAppContainer(SwitchNav);
