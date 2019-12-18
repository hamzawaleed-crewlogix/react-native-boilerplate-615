import React from 'react';
import {Provider} from 'react-redux';
import {BackHandler} from 'react-native';
import BackButtonHandler from './app/Helpers/BackButtonHandler';
import {NavigationStateHandler} from './app/Helpers/ScreenTrackingMiddleware';
import store from './app/Redux/store';
import AppNavigation from './app/Navigation/AppNavigation';

class App extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', BackButtonHandler);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation
          onNavigationStateChange={(prevState, currentState) =>
            NavigationStateHandler(prevState, currentState)
          }
        />
      </Provider>
    );
  }
}
export default App;
