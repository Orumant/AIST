import {connect} from 'react-redux'
import {Operations} from "../../modules/ChainListPage/ChainListPage";
import ChainsList from "../../pages/ChainListPage/index/ChainList";

function mapStateToProps(state) {
  return {
    chains: state.chainsListReducer.chains,
    testsAll: state.chainsListReducer.testsAll,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChains: (request) => dispatch(Operations.fetchChains(request)),
    fetchTestsData: () => dispatch(Operations.fetchTestsData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsList)
