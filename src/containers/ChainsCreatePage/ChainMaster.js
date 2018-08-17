import {connect} from 'react-redux'
import {Operations} from "../../modules/ChainsCreatePage/ChainMaster";
import ChainMaster from "../../pages/ChainsCreatePage/index/ChainMaster";

function mapStateToProps(state) {
  return {
    tests: state.chainMasterReducer.tests,
    templates: state.chainMasterReducer.templates,
    groups: state.chainMasterReducer.groups,
    isFetching: state.chainMasterReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllData: () => dispatch(Operations.fetchAllData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainMaster)
