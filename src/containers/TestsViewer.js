import {connect} from 'react-redux'
import {thunks, actions} from '../modules/TestsViewer/index'
import TestsViewer from "../pages/TestsViever/index/TestsViewer";

function mapStateToProps(state) {
  return {
    isLoading: state.TestsTableReducer.isLoading,
    tests: state.TestsTableReducer.tests,
    systems: state.TestsTableReducer.systems,
    stands: state.TestsTableReducer.stands,
    tags: state.TestsTableReducer.tags,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllDataNeeded: () => dispatch(thunks.fetchAllDataNeeded()),
    submitFilters: (filters) => dispatch(actions.submitFilters(filters)),
    clearFilters: () => dispatch(actions.clearFilters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestsViewer)
