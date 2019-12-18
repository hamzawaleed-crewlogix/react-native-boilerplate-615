import {StyleSheet} from 'react-native';
import COLORS from '../Theme/Colors';
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  heading: {
    color: COLORS.white,
    fontSize: 40,
    position: 'absolute',
    top: 100,
  },
  username: {},
  password: {
    marginTop: 10,
  },
  textbox: {
    backgroundColor: COLORS.white,
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    padding: 13,
    width: '80%',
    marginTop: 20,
    borderRadius: 50,
  },
  loginTxt: {
    color: COLORS.white,
    fontSize: 18,
    textAlign: 'center',
  },
  signupBtn: {
    marginTop: 20,
  },
  signupLabel: {
    color: 'gray',
  },
});
