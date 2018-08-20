import {connect} from 'react-redux'
import {Operations, Actions} from "../../modules/ChainsCreatePage/ChainMaster";
import ChainMaster from "../../pages/ChainsCreatePage/index/ChainMaster";

function mapStateToProps(state) {
  return {
    chain_data: state.chainMasterReducer.chain_data,
    testsAll: state.chainMasterReducer.testsAll,
    templatesAll: state.chainMasterReducer.templatesAll,
    groupsAll: state.chainMasterReducer.groupsAll,
    isFetching: state.chainMasterReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllData: () => dispatch(Operations.fetchAllData()),
    updateData: (chain_data)  => dispatch(Actions.dataUpdated(chain_data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainMaster)
