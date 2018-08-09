import {connect} from 'react-redux'
import Results from "../pages/Results/Results";
import {updateRequestAndOrders} from "../modules/Results/operations";


function mapStateToProps(state) {
  return {
    orders: state.ResultsReducer.data || [],
    request: state.ResultsReducer.request || {},
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateRequestAndOrders: (part, request) => dispatch(updateRequestAndOrders(part, request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
