import {connect} from 'react-redux'
import DataDirectoryTest from '../../pages/DataDirectoryPage/index/DataDirectory'
import {lockOrder, unlockOrder} from "../../modules/DataDirectoryTest/OrdersTable/operations";
import {Operations} from "../../modules/DataDirectoryTest/DataDirectoryTest";
import {info} from "react-notification-system-redux";
import * as Notifications from "react-notification-system-redux";


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
    showPopup: (popup) => dispatch(info(popup)),
    clearPopup: () => dispatch(Notifications.removeAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDirectoryTest)
