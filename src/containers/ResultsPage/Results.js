import {connect} from 'react-redux'
import Results from "../../pages/ResultsPage/index/Results";
import { Operations } from "../../modules/ResultsPage/Results";


function mapStateToProps(state) {
  return {
    isFetching: state.ResultsReducer.isFetching,
    orders: state.ResultsReducer.data,
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrders: (request) => dispatch(Operations.fetchOrders(request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
