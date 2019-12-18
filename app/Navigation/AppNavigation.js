import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens/Home/HomeScreen';
import styles from '../Styles/NavigationStyles';

const AppStackk = createStackNavigator(
  {
    HomeScreen: {screen: HomeScreen},
    NewHome: {screen: HomeScreen},
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(AppStackk);
