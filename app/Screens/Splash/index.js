import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {Colors} from '../../Theme';
// import {loginUserAct} from '../../redux/hoc/user/userActions';
export default class Splash extends Component {
  async componentDidMount() {
    let isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
    if (isFirstLaunch === null) {
      await AsyncStorage.setItem('isFirstLaunch', 'false');
      return this.props.navigation.navigate('Onboarding');
    } else {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        const userDataObj = JSON.parse(data);
        Axios.defaults.headers.common.Authorization = `Bearer 
        ${userDataObj.token}`;
        // store.dispatch(loginUserAct(userDataObj));
      }
      this.props.navigation.navigate('App');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/avatar.png')}
          style={styles.logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  logo: {
    // alignSelf: 'center',
  },
});
