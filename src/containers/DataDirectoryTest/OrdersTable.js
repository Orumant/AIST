import {connect} from 'react-redux';
import OrdersTable from "../../pages/DataDirectoryTest/index/ArchiveCatalogTabs/OrdersTable";
import {getOrderJSON, lockOrder, unlockOrder} from "../../modules/DataDirectoryTest/OrdersTable";

function mapStateToProps(state) {
  return {
    order_data: state.ordersTable.order_data,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getOrderJSON: (id_order) => dispatch(getOrderJSON(id_order)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable)
