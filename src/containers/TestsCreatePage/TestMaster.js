import {connect} from 'react-redux'
import {Operations, Actions} from "../../modules/TestsCreatePage/TestMaster";
import TestMaster from "../../pages/TestsCreatePage/index/TestMaster";

function mapStateToProps(state) {
  return {
    test_data: state.testMasterReducer.test_data,
    dataAll: state.testMasterReducer.dataAll,
    isFetching: state.testMasterReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllData: (test_id) => dispatch(Operations.fetchAllData(test_id)),
    updateData: (test_data)  => dispatch(Actions.dataUpdated(test_data)),
    submitNewTestData: (test_data, history) => dispatch(Operations.submitNewTestData(test_data, history)),
    submitEditedTestData: (test_id, test_data, history) => dispatch(Operations.submitEditedTestData(test_id, test_data, history)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestMaster)
