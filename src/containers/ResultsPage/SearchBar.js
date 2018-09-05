import {connect} from 'react-redux'
import { Operations} from "../../modules/ResultsPage/SearchBar";
import SearchBar from "../../pages/ResultsPage/index/Results/SearchBar";


function mapStateToProps(state) {
  return {
    chains: state.searchBarReducer.chains || [],
    tests: state.searchBarReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(Operations.fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
