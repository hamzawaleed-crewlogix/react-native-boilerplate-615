import React from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Text,
  Form,
  Label,
} from 'native-base';
import {View, ScrollView, StyleSheet, TextInput} from 'react-native';
import {withNavigation} from 'react-navigation';
import COLORS from '../../Theme/Colors';
import {Notifications} from '../../Constants/Routes';
const SearchContainer = ({children, navigation}) => {
  return (
    <Container>
      <Header noShadow style={styles.header}>
        <Left>
          <Button transparent onPress={navigation.toggleDrawer}>
            <Icon name="menu" style={styles.icon} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>{navigation.state.routeName}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => navigation.navigate(Notifications)}>
            <Icon
              type="Ionicons"
              name="ios-notifications"
              style={styles.icon}
            />
          </Button>
        </Right>
      </Header>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textBox}
          placeholder="Enter search keyword here"
        />
      </View>
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    borderBottomWidth: 0,
    elevation: 0,
  },
  icon: {
    color: 'white',
  },
  title: {
    color: 'white',
  },
  searchContainer: {
    backgroundColor: COLORS.primary,
    paddingBottom: 10,
  },
  textBox: {
    backgroundColor: 'white',
    borderRadius: 40,
    paddingLeft: 10,
    marginHorizontal: 10,
    height: 40,
  },
});

export default withNavigation(SearchContainer);
