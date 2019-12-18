import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import styles from '../Styles/NavigationStyles';
import ROUTES from '../Constants/Routes';
import HomeScreen from '../Screens/Home';

const AppStack = createStackNavigator(
  {
    [ROUTES.Home]: {screen: HomeScreen},
  },
  {
    initialRouteName: ROUTES.Home,
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(AppStack);
