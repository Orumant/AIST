import {connect} from 'react-redux';
import Launcher from "../components/Launcher";
import {fetchChainTemplates, getUsersGroups, submitFormTemplate} from "../api";
import {clearIdOrderAlert} from "../actions";

function mapStateToProps(state) {
  return{
    notifications: state.notifications,
    chains: state.chainTemplates.chainTemplates,
    orderId: state.launcher.orderId,
    groups: state.launcher.groups,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainTemplates: () => dispatch(fetchChainTemplates()),
    submitFormTemplate: (params) => dispatch(submitFormTemplate(params)),
    clearIdOrderAlert: () => dispatch(clearIdOrderAlert()),
    fetchGroups: () => dispatch(getUsersGroups()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Launcher)

