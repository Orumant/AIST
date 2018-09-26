import {connect} from 'react-redux'
import SelectTest from "../../../pages/ChainsCreatePage/index/ChainMaster/SelectTest";
import { Actions, Operations } from "../../../modules/ChainsCreatePage/ChainMaster/SelectTest/index";

function mapStateToProps(state) {
  return {
    tests: state.selectTestReducer.tests,
    selectedTest: state.selectTestReducer.selectedTest,
    error: state.selectTestReducer.error,
    isFetching: state.selectTestReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFilterTests: (request, data, needUpdate) => dispatch(Operations.fetchFilterTests(request, data, needUpdate)),
    onSelectTest: (selection) => dispatch(Actions.testSelected(selection)),
    onSortTest: (tests) => dispatch(Actions.testReordered(tests)),
    onDeleteTest: (index) => dispatch(Actions.testRemoved(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTest)
