import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// screens
import Home from './app/screens/Home';
import Collections from './app/screens/Collections';
import Splash from './app/screens/Splash/Splash';
import OnboardingScreen from './app/screens/Onboarding/';
import ViewCollection from './app/screens/Collections/ViewCollection';
import ViewArtwork from './app/screens/Artwork/ViewArtwork';
import Exhibitions from './app/screens/Exhibitions';
import AllExhibitions from './app/screens/Exhibitions/AllExhibitions';
import Filters from './app/screens/Home/Filters';
import CollectionFilters from './app/screens/Collections/Filters';
import {primaryFont, secondaryMedium} from './app/constants/THEME';
const icons = {
  Home: {
    simple: require('./assets/icons/tabs/home.png'),
    hover: require('./assets/icons/tabs/homeFill.png'),
  },
  Collections: {
    simple: require('./assets/icons/tabs/collections.png'),
    hover: require('./assets/icons/tabs/collectionsFill.png'),
  },
  Exhibitions: {
    simple: require('./assets/icons/tabs/exhibitions.png'),
    hover: require('./assets/icons/tabs/exhibitionsFill.png'),
  },
};
const defaultHeaderNavOptions = {
  headerBackImage: (
    <Image source={require('./assets/icons/header/backBlack.png')} />
  ),
  headerStyle: {
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: primaryFont,
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    marginTop: 9,
  },
};

const BottomTabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Collections: {
      screen: Collections,
    },
    Exhibitions: {
      screen: Exhibitions,
    },
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: false,
      style: {
        height: 60,
        paddingVertical: 6,
      },
      activeTintColor: 'black',
      labelStyle: {
        fontSize: 15,
        color: 'black',
        fontFamily: secondaryMedium,
      },
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (focused) {
          iconName = icons[routeName].hover;
        } else {
          iconName = icons[routeName].simple;
        }
        return (
          <Image
            source={iconName}
            style={{width: 24, height: 24, marginTop: 4}}
          />
        );
      },
    }),
  },
);

const AppStack = createStackNavigator(
  {
    Home: {
      screen: BottomTabs,
      navigationOptions: {header: null},
    },
    Filters: {
      screen: Filters,
      navigationOptions: {
        headerTitle: 'Filters',
        headerTitleStyle: {
          fontFamily: primaryFont,
          fontSize: 20,
        },
        headerTransparent: false,
      },
    },
    CollectionFilters: {
      screen: CollectionFilters,
      navigationOptions: {
        headerTitle: 'Filters',
        headerTitleStyle: {
          fontFamily: primaryFont,
          fontSize: 20,
        },
        headerTransparent: false,
      },
    },

    AllExhibitions: {
      screen: AllExhibitions,
      navigationOptions: {
        header: null,
      },
    },
    ViewCollection: {
      screen: ViewCollection,
      navigationOptions: {
        header: null,
      },
    },
    ViewArtwork: {
      screen: ViewArtwork,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        ...defaultHeaderNavOptions,
        headerTransparent: true,
        headerBackTitle: null,
        headerLeftContainerStyle: {paddingLeft: 20},
        headerRightContainerStyle: {paddingRight: 20},
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{marginRight: 10}}>
            <Image source={require('./assets/icons/header/homeBlack.png')} />
          </TouchableOpacity>
        ),
      };
    },
    headerLayoutPreset: 'center',
  },
);

const Onboarding = createStackNavigator(
  {
    Onboarding: {
      screen: OnboardingScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    defaultNavigationOptions: {...defaultHeaderNavOptions},
    headerLayoutPreset: 'center',
  },
);

const Nav = createSwitchNavigator(
  {
    Splash: Splash,
    Onboarding: Onboarding,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
  },
);
export default createAppContainer(Nav);
