import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import {withNavigation} from 'react-navigation';
import COLORS from '../../Theme/Colors';

const MyHeader = ({title, back, navigation}) => {
  return (
    <Header style={styles.header}>
      <Left>
        <Button transparent onPress={navigation.toggleDrawer}>
          <Icon style={styles.icon} name="menu" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.title}>{title}</Title>
      </Body>
      <Right>
        <Button transparent>{/* <Icon name="home" /> */}</Button>
      </Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
  },
  title: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
});

export default withNavigation(MyHeader);
