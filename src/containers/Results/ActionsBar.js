import {connect} from 'react-redux'
import {fetchChainsTests} from "../../modules/global/FilterChain";
import ActionsBar from "../../pages/Results/index/HeaderForm/ActionsBar";


function mapStateToProps(state) {
  return {
    chains: state.actionsBarReducer.chains || [],
    tests: state.actionsBarReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsBar)
