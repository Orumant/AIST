import {connect} from 'react-redux'
import { Operations} from "../../modules/TestsViewer/SearchBar";
import SearchBar from "../../pages/TestsViever/index/TestsViewer/SearchBar";

function mapStateToProps(state) {
  return {
    tests: state.searchBarReducer.tests || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTests: () => dispatch(Operations.fetchTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
