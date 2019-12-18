import {StyleSheet} from 'react-native';
import {Colors} from '../Theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(248,249,249)',
  },
  slide: {
    height: '100%',
    alignItems: 'center',
  },
  skipBtn: {
    marginRight: 20,
    marginTop: 10,
  },
  skipTxt: {
    alignSelf: 'flex-end',
    padding: 6,
    color: Colors.primary,
    fontFamily: 'Avenir-Heavy',
  },
  img: {
    width: '85%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    paddingHorizontal: 60,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: 200,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    width: '100%',
  },

  title: {
    fontSize: 18,
    fontFamily: 'Avenir-Heavy',
    color: 'rgb(4,44,92)',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    fontFamily: 'Avenir-Medium',
    color: Colors.gray2,
    textAlign: 'center',
    marginTop: 16,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  loginBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.primary,
    width: 150,
  },
  loginTxt: {
    color: '#fff',
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
    textAlign: 'center',
  },
  signupBtn: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.gray2,
    width: 150,
  },
  signupTxt: {
    color: Colors.gray2,
    fontFamily: 'Avenir-Heavy',
    fontSize: 16,
    textAlign: 'center',
  },
});
