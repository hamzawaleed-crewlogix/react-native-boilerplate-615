import {connect} from 'react-redux';

const mapStateToProps = state => {
  // return state.user;
  return state;
};

const withUser = Component => connect(mapStateToProps, null)(Component);
export default withUser;
