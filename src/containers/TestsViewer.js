import {connect} from 'react-redux'
import {thunks, actions} from '../modules/TestsViewer/index'
import TestsViewer from "../pages/TestsViever/index/TestsViewer";

function mapStateToProps(state) {
  return {
    isLoading: state.TestsTableReducer.isLoading,
    tests: state.TestsTableReducer.tests,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTestsViewerTests: () => dispatch(thunks.fetchTestsViewerTests()),
    filterTests: (filters) => dispatch(thunks.filterTests(filters)),
    filterByName: (name) => dispatch(actions.filterByName(name)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestsViewer)
