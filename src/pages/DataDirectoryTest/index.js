import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import OrdersTable from "../../containers/OrdersTable"
import SearchBar from "./index/SearchBar";
import {goArchiveBtn, goDataBtn} from "./index/DataDirectoryTestButtons";
import Notifications from 'react-notification-system-redux';
import Header from "../../components/Header";
import ChainsByMarkerForm from "./index/ChainsByMarkerForm";
import "./style.css"


class DataDirectoryTest extends React.Component{

  componentDidMount() {
    const {request, updateRequestAndOrders} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request)
  }

  render() {
    const {orders, addToRequest, request, fetchOrders, updateRequestAndOrders, lockOrder, unlockOrder, notifications} = this.props;
    const goToResource = <span>
      {!request.locked ? goArchiveBtn(updateRequestAndOrders, request): goDataBtn(updateRequestAndOrders, request)}
      </span>;
    console.log(request.marker)
    return (
      <div style={{height: '100%'}}>
        <Header/>
        <SearchBar onChange={fetchOrders}
                   openChainsForm={() => this.handleChainsForm(true)}
                   button={goToResource}
                   dataLenght={orders.length}
                   addToRequest={addToRequest}
                   request={request}
                   updateRequestAndOrders={updateRequestAndOrders}/>
        <div >
          <OrdersTable data={orders} request={request} lockOrder={lockOrder} unlockOrder={unlockOrder}  updateRequestAndOrders={updateRequestAndOrders}/>
          <Notifications notifications={notifications}/>
        </div>
      </div>
    )
  }
}

export default DataDirectoryTest
