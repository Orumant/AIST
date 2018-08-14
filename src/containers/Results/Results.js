import {connect} from 'react-redux'
import Results from "../../pages/ResultsPage/index/Results";
import {updateRequestAndOrders} from "../../modules/Results/Results/operations";
import { Operations } from "../../modules/Results";
import {fetchChainsTests} from "../../modules/global/FetchChainAndTest";


function mapStateToProps(state) {
  return {
    orders: state.ResultsReducer.data || [],
    chains: state.searchBarReducer.chains || [],
    tests: state.searchBarReducer.tests || [],
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateRequestAndOrders: (part, request) => dispatch(updateRequestAndOrders(part, request)),
    fetchOrders: (request) => dispatch(Operations.fetchOrders(request)),
    fetchChainsTests: () => dispatch(fetchChainsTests()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
