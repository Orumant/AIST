import {connect} from 'react-redux'
import {Operations} from "../../modules/ChainListPage/ChainListPage";
import ChainsList from "../../pages/ChainListPage/index/ChainList";

function mapStateToProps(state) {
  return {
    chains: state.chainsListReducer.chains,
    chains_editable: state.chainsListReducer.chains_editable,
    testsAll: state.chainsListReducer.testsAll,
    isFetching: state.chainsListReducer.isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChains: (request) => dispatch(Operations.fetchChains(request)),
    fetchTestsData: () => dispatch(Operations.fetchTestsData()),
    fetchEditableTests: () => dispatch(Operations.fetchEditableTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsList)
