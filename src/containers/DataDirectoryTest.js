import {connect} from 'react-redux'
import DataDirectoryTest from '../pages/DataDirectoryTest'
import {lockOrder} from "../api";
import {createRequest, fetchOrders, updateRequestAndOrders} from "../modules/DataDirectoryTest";


function mapStateToProps(state) {
  return {
    orders: state.dataDirectoryTestReducer.data || [],
    request: state.dataDirectoryTestReducer.request || {},
    isRequestModified: state.dataDirectoryTestReducer.isRequestModified,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchOrders: (requestBody) => dispatch(fetchOrders(requestBody)),
    addToRequest: (request) => dispatch(createRequest(request)),
    updateRequestAndOrders: (part, request) => dispatch(updateRequestAndOrders(part, request)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataDirectoryTest)
