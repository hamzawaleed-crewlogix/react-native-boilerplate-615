import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Item, Input, Label} from 'native-base';
import styles from '../../Styles/login.styles';
import {Home, Signup} from '../../Constants/Routes';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Real Estate</Text>
        <View style={styles.innerContainer}>
          <Item floatingLabel style={styles.username}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>Password</Label>
            <Input />
          </Item>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate(Home)}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.props.navigation.navigate(Signup)}>
            <Text style={styles.signupLabel}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
