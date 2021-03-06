import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import MyHeader from '../../Components/Header/MyHeader';
const notifs = [1, 2, 3, 4];
export default class Messages extends Component {
  render() {
    return (
      <React.Fragment>
        <MyHeader title="Messages" />
        <List
          dataArray={notifs}
          keyExtractor={(a, b) => b.toString()}
          renderItem={() => (
            <ListItem thumbnail>
              <Left>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://www.vtsl.com/wp-content/uploads/2015/08/voth-john-2019-web.jpg',
                  }}
                />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>
                  Doing what you like will always keep you happy . .
                </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          )}
        />
      </React.Fragment>
    );
  }
}
