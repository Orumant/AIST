import {connect} from 'react-redux';
import OrdersTable from "../component/OrdersTable";
import {getOrderJSON, lockOrder, unlockOrder} from "../modules/OrdersTable";

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
