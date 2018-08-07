import {connect} from 'react-redux'
import {fetchOrderDetails, restartChain} from "../../modules/Results/TestTable/operations";
import TestTable from "../../pages/Results/index/TestsTable";


function mapStateToProps(state) {
  return {
    test_details: state.TestTableReducer.test_details || [],
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrderDetails: (id_order) => dispatch(fetchOrderDetails(id_order)),
    restartChain: (id_order) => dispatch(restartChain(id_order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestTable)
