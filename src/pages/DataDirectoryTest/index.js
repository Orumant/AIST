import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import "./style.css"
import OrdersTable from "../../containers/OrdersTable"
import SearchBar from "../../component/SearchBar";
import {goArchiveBtn} from "../../component/DataDirectoryTestButtons";


class DataDirectoryTest extends React.Component{

  render() {
    const {orders, addToRequest, request, fetchOrders, updateRequestAndOrders} = this.props;
    console.log(this.props)
    return (
      <div style={{height: '100%'}}>
        <SearchBar onChange={fetchOrders} button={goArchiveBtn} dataLenght={orders.length} addToRequest={addToRequest} request={request} updateRequestAndOrders={updateRequestAndOrders}/>
        <div className={'view-results-table'}>
          <OrdersTable data={orders}/>
        </div>
      </div>
    )
  }
}

export default DataDirectoryTest
