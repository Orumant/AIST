import {connect} from 'react-redux'
import DataDirectoryTest from '../pages/DataDirectoryTest'
import {updateRequestAndOrders} from "../modules/DataDirectoryTest";
import {lockOrder, unlockOrder} from "../modules/OrdersTable";


function mapStateToProps(state) {
  return {
    orders: state.dataDirectoryTestReducer.data || [],
    request: state.dataDirectoryTestReducer.request || {},
    notifications: state.notifications,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    lockOrder: (id, request) => dispatch(lockOrder(id, request)),
    unlockOrder: (id, request) => dispatch(unlockOrder(id, request)),
    updateRequestAndOrders: (part, request) => dispatch(updateRequestAndOrders(part, request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDirectoryTest)
