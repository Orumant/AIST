import {connect} from 'react-redux'
import {Operations} from "../../modules/ChainListPage/ChainListPage";
import ChainsList from "../../pages/ChainListPage/index/ChainList";

function mapStateToProps(state) {
  return {
    chains: state.chainsListReducer.chains,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChains: (request) => dispatch(Operations.fetchChains(request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChainsList)
