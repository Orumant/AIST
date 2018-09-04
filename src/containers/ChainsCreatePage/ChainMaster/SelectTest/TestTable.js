import {connect} from 'react-redux'
import { Actions } from "../../../../modules/ChainsCreatePage/ChainMaster/SelectTest/TestTable";
import TestTable from "../../../../pages/ChainsCreatePage/index/ChainMaster/SelectTest/TestTable";

function mapStateToProps(state) {
  return {
    selectedTest: state.selectedTestTableReducer.selectedTest,
    error: state.selectedTestTableReducer.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // validateField: (regExp) => dispatch(Operations.validateForm(regExp)),
    selectTest: (selection, testsAll) => dispatch(Actions.testSelected(selection, testsAll))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable)
