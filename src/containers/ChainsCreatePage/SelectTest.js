import {connect} from 'react-redux'
import SelectTest from "../../pages/ChainsCreatePage/index/ChainMaster/SelectTest";
import { Operations } from "../../modules/ChainsCreatePage/SelectTest";

function mapStateToProps(state) {
  return {
    tests: state.selectTestReducer.tests,
    isFetching: state.selectTestReducer.isFetching,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFilterTests: (request) => dispatch(Operations.fetchFilterTests(request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectTest)
