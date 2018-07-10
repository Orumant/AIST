import {connect} from 'react-redux';
import OrdersTable from "../component/OrdersTable";
import {fetchChainTemplates, getDictionaryData, getUsersGroups, lockOrder, submitFormTemplate} from "../api";
import {clearIdOrderAlert, standsFetchSuccess} from "../actions";
import {getOrderJSON} from "../modules/OrdersTable";

function mapStateToProps(state) {
  return{
  }
}

function mapDispatchToProps(dispatch) {
  return {
    lockOrder: (id) => dispatch(lockOrder(id)),
    getOrderJSON: (id_order) => dispatch(getOrderJSON(id_order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersTable)
