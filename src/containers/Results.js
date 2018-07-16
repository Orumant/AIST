import {connect} from 'react-redux'
import {getPublicKeyRegistration} from "../api";
import ResultsPage from "../pages/Results/index";

function mapStateToProps(state) {
  return {
    orders: state,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ReqistrationButtonClick : (payload) => dispatch(getPublicKeyRegistration(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)
