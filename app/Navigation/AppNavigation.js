import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import styles from '../Styles/NavigationStyles';
import ROUTES from '../Constants/Routes';
import HomeScreen from '../Screens/Home';
import MessagesScreen from '../Screens/Messages';
import GroupsScreen from '../Screens/Groups';
import AccountScreen from '../Screens/Account';

const DrawerNavigator = createDrawerNavigator(
  {
    [ROUTES.Home]: {screen: HomeScreen},
    [ROUTES.Account]: {screen: AccountScreen},
    [ROUTES.Groups]: {screen: GroupsScreen},
    [ROUTES.Messages]: {screen: MessagesScreen},
  },
  {
    initialRouteName: ROUTES.Home,
  },
);

const AppStack = createStackNavigator(
  {
    [ROUTES.Drawer]: DrawerNavigator,
  },
  {
    initialRouteName: ROUTES.Drawer,
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(AppStack);
