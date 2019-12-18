import React from 'react';
import styles from '../../Styles/drawer.styles';
import {Text, Image, View} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {logoutUser as logoutUserRedux} from '../../Redux/actions/userActions';
import withUser from '../../Redux/hoc/withUser';
import STORE from '../../Redux/store';
import {Account, Login, Splash} from '../../Constants/Routes';
const CustomDrawer = props => {
  const logoutUser = () => {
    STORE.dispatch(logoutUserRedux(props.user.token, props.navigation));
  };
  const profilePic = props.user
    ? {uri: props.user.avatar_location}
    : require('../../../assets/avatar.png');
  return (
    <ScrollView
      style={{flex: 1}}
      bounces={false}
      contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <View style={styles.picContainer}>
            <Image source={profilePic} style={styles.userThumb} />
            <View style={styles.progressLayer} />
            <View style={styles.offsetLayer} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>
              {props.user ? props.user.name : 'Guest User'}
            </Text>
            {props.user && (
              <Text style={styles.email} numberOfLines={1}>
                {props.user.email}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.listContainer}>
          <DrawerNavigatorItems {...props} />
        </View>
        <View style={styles.bottomCont}>
          <TouchableOpacity
            style={styles.bottomBtn}
            onPress={() =>
              props.navigation.navigate(Account) +
              props.navigation.closeDrawer()
            }>
            <Image
              source={require('../../../assets/icons/drawer/navMenuSettingIcon.png')}
            />
            <Text style={styles.bottomBtnLabel}>Settings</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity
            style={styles.bottomBtn}
            onPress={() =>
              props.user
                ? logoutUser() + props.navigation.navigate(Splash)
                : props.navigation.closeDrawer() +
                  props.navigation.navigate(Login)
            }>
            <Text style={styles.bottomBtnLabel}>
              {props.user ? 'Logout' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default withUser(CustomDrawer);
