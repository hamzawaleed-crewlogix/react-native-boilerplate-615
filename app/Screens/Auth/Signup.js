import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Item, Input, Label} from 'native-base';
import styles from '../../Styles/login.styles';

export default class SignupScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <Item floatingLabel style={styles.username}>
            <Label>Full Name</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>Password</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>Number</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>Agency</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>Address</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.password}>
            <Label>City</Label>
            <Input />
          </Item>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.loginTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
