import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import Notifications from 'react-notification-system-redux';

import Header from "../../components/Header";
import SearchBar from "../../containers/DataDirectoryTest/SearchBar";
import ArchiveCatalogTabs from "./index/ArchiveCatalogTabs";
import "./style.css"


class DataDirectoryTest extends React.Component{

  componentDidMount() {
    const {request, updateRequestAndOrders} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request);
  }

  render() {

    const {orders, request, fetchOrders, updateRequestAndOrders, lockOrder, unlockOrder, notifications} = this.props;
    return (
      <div style={{height: '100%'}}>
        <Header/>
        <SearchBar onChange={fetchOrders}
                   dataLength={orders.length}
                   request={request}
                   updateRequestAndOrders={updateRequestAndOrders}/>
        <ArchiveCatalogTabs data={orders} request={request} lockOrder={lockOrder} unlockOrder={unlockOrder}  updateRequestAndOrders={updateRequestAndOrders}/>
        <Notifications notifications={notifications}/>
      </div>
    )
  }
}

export default DataDirectoryTest
