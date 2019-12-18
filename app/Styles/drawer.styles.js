import {StyleSheet} from 'react-native';
import {Colors} from '../Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingLeft: 25,
    paddingBottom: 25,
    backgroundColor: Colors.primary,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  userInfo: {
    marginLeft: 6,
  },
  userName: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 18,
    color: '#fff',
  },
  email: {
    fontFamily: 'Avenir-Book',
    fontSize: 12,
    color: '#fff',
    width: '98%',
  },
  listContainer: {
    marginTop: '40%',
    flex: 1,
  },
  bottomBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  bottomBtnLabel: {
    color: '#fff',
    fontFamily: 'Avenir-Book',
    marginLeft: 6,
  },
  bottomCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  seperator: {
    width: 1,
    height: '100%',
    backgroundColor: '#fff',
    marginHorizontal: 30,
  },
  userThumb: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 60,
    position: 'absolute',
  },
  picContainer: {
    width: 70,
    height: 70,
    borderWidth: 3,
    borderRadius: 80,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLayer: {
    width: 70,
    height: 70,
    borderWidth: 3,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderTopColor: 'white',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotateZ: '180deg'}],
    borderRadius: 80,
  },
  offsetLayer: {
    width: 70,
    height: 70,
    position: 'absolute',
    borderWidth: 3,
    borderRadius: 80,
    borderLeftColor: 'white',
    borderBottomColor: 'white',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    transform: [{rotateZ: '-75deg'}],
  },
});

export const DrawerStyles = {
  labelStyle: {
    color: '#fff',
    fontFamily: 'Avenir-Book',
    fontWeight: '500',
    marginLeft: 0,
  },
  icons: {
    width: 20,
    height: 20,
  },
  itemStyle: {},
};
