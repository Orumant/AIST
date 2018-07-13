import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import "./style.css"
import OrdersTable from "../../containers/OrdersTable"
import SearchBar from "../../component/SearchBar";
import {goArchiveBtn, goDataBtn} from "../../component/DataDirectoryTestButtons";
import Notifications from 'react-notification-system-redux';
import Header from "../../components/Header";
import {Modal} from "react-bootstrap";
import ChainsTable from "../../containers/ChainsTable";
import ChainsByMarkerForm from "../../component/ChainsByMarkerForm";


class DataDirectoryTest extends React.Component{

  state = {
    showChainsForm: false,
  }

  handleChainsForm = (val) => {
    this.setState({showChainsForm: val})
  }


  componentDidMount() {
    const {request, updateRequestAndOrders} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request)
  }

  render() {
    const {orders, addToRequest, request, fetchOrders, updateRequestAndOrders, lockOrder, unlockOrder, notifications} = this.props;
    const {showChainsForm} = this.state;
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
        <div className={'view-results-table'}>
          <OrdersTable data={orders} request={request} lockOrder={lockOrder} unlockOrder={unlockOrder}/>
          {showChainsForm? <ChainsByMarkerForm marker={request.marker} show={showChainsForm} close={() => this.handleChainsForm(false)}/>: null}
          <Notifications notifications={notifications}/>
        </div>
      </div>
    )
  }
}

export default DataDirectoryTest
