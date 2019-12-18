import {connect} from 'react-redux';
import {signupUser, updateUser, loginUser} from './userActions';

const mapStateToProps = user => {
  return user.user;
};
const mapdispatchToProps = dispatch => ({
  signupUser: formData => dispatch(signupUser(formData)),
  updateUser: (formData, navigation, oldUser) =>
    dispatch(updateUser(formData, navigation, oldUser)),
  loginUser: formData => dispatch(loginUser(formData)),
});

export const withSignup = Component =>
  connect(
    mapStateToProps,
    mapdispatchToProps,
  )(Component);
