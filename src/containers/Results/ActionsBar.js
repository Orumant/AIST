import {connect} from 'react-redux'
import {fetchChainsTests} from "../../modules/Results/operations";
import ActionsBar from "../../pages/ResultsPage/index/HeaderForm/ActionsBar";


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
