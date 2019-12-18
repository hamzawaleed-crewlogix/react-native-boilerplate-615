import React, {Component} from 'react';
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
const notifs = [1, 2, 3, 4];
export default class Notifications extends Component {
  render() {
    return (
      <Container>
        <List
          dataArray={notifs}
          keyExtractor={(a, b) => b.toString()}
          renderItem={() => (
            <ListItem thumbnail>
              <Left>
                <Thumbnail
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
      </Container>
    );
  }
}
