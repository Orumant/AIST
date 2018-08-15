import {connect} from 'react-redux'
import {fetchChainsTests} from "../../modules/DataDirectoryTest/SearchBar/operations";
import SearchBar from "../../pages/DataDirectoryPage/index/DataDirectory/SearchBar";


function mapStateToProps(state) {
  return {
    chains: state.searchBarReducerDD.chains || [],
    tests: state.searchBarReducerDD.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
