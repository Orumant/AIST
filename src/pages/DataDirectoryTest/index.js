import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import OrdersTable from "../../containers/DataDirectoryTest/OrdersTable"
import SearchBar from "./index/SearchBar";
import {goArchiveBtn, goDataBtn} from "./index/ArchiveCatalogTabs/OrdersTable/ActionButtons";
import Notifications from 'react-notification-system-redux';
import Header from "../../components/Header";
import "./style.css"
import ArchiveCatalogTabs from "./index/ArchiveCatalogTabs";


class DataDirectoryTest extends React.Component{

  componentDidMount() {
    const {request, updateRequestAndOrders} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request);
  }

  render() {

    const {orders, addToRequest, request, fetchOrders, updateRequestAndOrders, lockOrder, unlockOrder, notifications} = this.props;
    return (
      <div style={{height: '100%'}}>
        <Header/>
        <SearchBar onChange={fetchOrders}
                   dataLength={orders.length}
                   addToRequest={addToRequest}
                   request={request}
                   updateRequestAndOrders={updateRequestAndOrders}/>
        <ArchiveCatalogTabs data={orders} request={request} lockOrder={lockOrder} unlockOrder={unlockOrder}  updateRequestAndOrders={updateRequestAndOrders}/>
        <Notifications notifications={notifications}/>
      </div>
    )
  }
}

export default DataDirectoryTest
