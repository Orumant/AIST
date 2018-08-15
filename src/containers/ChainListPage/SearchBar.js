import {connect} from 'react-redux'
import SearchBar from "../../pages/ChainListPage/index/ChainList/SearchBar";
import {Operations} from "../../modules/ChainListPage/SearchBar";


function mapStateToProps(state) {
  return {
    chains: state.searchBarReducerChainList.chains || [],
    tests: state.searchBarReducerChainList.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(Operations.fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
