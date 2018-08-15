import {connect} from 'react-redux'
import DataDirectoryTest from '../../pages/DataDirectoryPage/index/DataDirectory'
import {lockOrder, unlockOrder} from "../../modules/DataDirectoryTest/OrdersTable/operations";
import {Operations} from "../../modules/DataDirectoryTest/DataDirectoryTest";


function mapStateToProps(state) {
  return {
    isFetching: state.dataDirectoryTestReducer.isFetching,
    orders: state.dataDirectoryTestReducer.data || [],
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    lockOrder: (id, request) => dispatch(lockOrder(id, request)),
    unlockOrder: (id, request) => dispatch(unlockOrder(id, request)),
    fetchOrders: (request) => dispatch(Operations.fetchOrders(request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDirectoryTest)
