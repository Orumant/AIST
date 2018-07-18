import {connect} from 'react-redux'
import DataDirectoryTest from '../../pages/DataDirectoryTest/index'
import {updateRequestAndOrders} from "../../modules/DataDirectoryTest/DataDirectoryTest";
import {lockOrder, unlockOrder} from "../../modules/DataDirectoryTest/OrdersTable";
import Notifications, {info} from "react-notification-system-redux";


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
    showInfoPopup: (infoPopup) => dispatch(info(infoPopup)),
    clearPopups: () => dispatch(Notifications.removeAll()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDirectoryTest)
