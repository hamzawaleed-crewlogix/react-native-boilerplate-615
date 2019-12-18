import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button primary onPress={() => this.props.navigation.push('NewHome')}>
          <Text> textInComponent </Text>
        </Button>
      </View>
    );
  }
}
