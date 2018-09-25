import {connect} from 'react-redux'
import {Operations, Actions} from "../../modules/ChainsCreatePage/ChainMaster";
import ChainMaster from "../../pages/ChainsCreatePage/index/ChainMaster";

function mapStateToProps(state) {
  return {
    chain_data: state.chainMasterReducer.chain_data,
    dataAll: state.chainMasterReducer.dataAll,
    isFetching: state.chainMasterReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllData: (chain_name) => dispatch(Operations.fetchAllData(chain_name)),
    updateData: (chain_data)  => dispatch(Actions.dataUpdated(chain_data)),
    submitNewChainData: (chain_data, history) => dispatch(Operations.submitNewChainData(chain_data, history)),
    submitEditedChainData: (chain_name, chain_data, history) => dispatch(Operations.submitEditedChainData(chain_name, chain_data, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainMaster)
