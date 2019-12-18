import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styles from '../../Styles/onboarding.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import metrics from '../../Theme/Metrics';

const list = [
  {
    // image: require('../../../assets/onboarding/3/iPhoneXBlue.png'),
    title: 'Anytime, Anywhere',
    content: 'Read, Watch or Listen to the Digital updates',
  },
  {
    // image: require('../../../assets/onboarding/1/iPhoneXBlue.png'),
    title: 'Tech',
    content: 'Read, Watch or Listen to the Tech updates',
  },
  {
    // image: require('../../../assets/onboarding/2/iPhoneXBlue.png'),
    title: 'Social',
    content: 'Read, Watch or Listen to the Social updates',
  },

  {
    // image: require('../../../assets/onboarding/4/iPhoneXBlue.png'),
    title: 'Startup',
    content: 'Read, Watch or Listen to the Startup updates',
  },
  {
    // image: require('../../../assets/onboarding/5/iPhoneXBlue.png'),
    title: 'Stay Tuned',
    content: 'With all Digital updates',
  },
];
export default class Onboarding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
    };
    StatusBar.setHidden(true);
  }

  pagination() {
    const {activeSlide} = this.state;
    return (
      <Pagination
        dotsLength={list.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: '#fff', paddingTop: 0}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: -10,
          backgroundColor: 'rgba(4,44,92,0.5)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem({item}) {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.img} />
      </View>
    );
  }
  async skip() {
    this.props.navigation.navigate('App');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.skipBtn} onPress={() => this.skip()}>
          <Text style={styles.skipTxt}>SKIP</Text>
        </TouchableOpacity>

        <Carousel
          scrollEnabled={false}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          activeSlideOffset={0}
          ref={c => {
            this._carousel = c;
          }}
          data={list}
          // currentScrollPosition={}
          renderItem={this._renderItem}
          sliderWidth={metrics.screenWidth}
          itemWidth={metrics.screenWidth}
          windowSize={1}
          onSnapToItem={index => this.setState({activeSlide: index})}
        />
        <GestureRecognizer
          onSwipeLeft={() => this._carousel.snapToNext()}
          onSwipeRight={() => this._carousel.snapToPrev()}
          // config={config}
          style={{
            flex: 1,
            backgroundColor: this.state.backgroundColor,
          }}>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>
              {list[this.state.activeSlide].title}
            </Text>
            <Text style={styles.content}>
              {list[this.state.activeSlide].content}
            </Text>
          </View>
        </GestureRecognizer>
        {this.pagination()}
        <View style={styles.btnsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.loginBtn}
            onPress={() =>
              this.props.navigation.navigate('LoginFromOnboarding')
            }>
            <Text style={styles.loginTxt}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('SignupFromOnboarding')
            }
            activeOpacity={0.5}
            style={styles.signupBtn}>
            <Text style={styles.signupTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
