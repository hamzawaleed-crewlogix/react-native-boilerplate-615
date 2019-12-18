import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SearchContainer from '../../Components/SearchContainer/SearchContainer';

export default class HomeScreen extends Component {
  render() {
    return (
      <SearchContainer>
        <Text> Home </Text>
      </SearchContainer>
    );
  }
}
