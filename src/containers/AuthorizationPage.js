import {connect} from 'react-redux'
import AuthorizationPage from '../components/AuthorizationPage'
import {setAlertChromeVersion, loginPasswordChange} from "../actions";
import {getPublicKeyLogin} from "../api";

function mapStateToProps(state) {
  return {
    paramNames: state.dataAuthorization.paramNames,
    notifications: state.notifications,
    warnings: state.browserAlert.notifications
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginButtonClicked : (payload) => dispatch(getPublicKeyLogin(payload)),
    loginPasswordChange : (payload) => dispatch(loginPasswordChange(payload)),
    setAlert: (notification) => dispatch(setAlertChromeVersion(notification)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationPage)
