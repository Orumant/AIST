import {connect} from 'react-redux'
import {fetchChainsTests} from "../../modules/Results/operations";
import SearchBar from "../../pages/Results/index/SearchBar";


function mapStateToProps(state) {
  return {
    chains: state.searchBarReducer.chains || [],
    tests: state.searchBarReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
