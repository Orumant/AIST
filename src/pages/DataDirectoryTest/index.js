import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import SearchBar from "./index/SearchBar";
import ArchiveCatalogTabs from "./index/ArchiveCatalogTabs";
import {goArchiveBtn, goDataBtn} from "./index/ArchiveCatalogTabs/OrdersTable/ActionButtons";
import Notifications from 'react-notification-system-redux';
import Header from "../../components/Header";
import "./style.css"



class DataDirectoryTest extends React.Component{

  componentDidMount() {
    const {request, updateRequestAndOrders, showInfoPopup} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request);
    showInfoPopup(this.infoPopup)
  }

  infoPopup = {
    title: 'Не нашли что искали?',
    message: 'В таблице отображаются только успешно прошедшие тесты. Вы можете запустить нужную цепочку',
    position: 'bl',
    autoDismiss: 0,
    action: {
      label: 'Здесь',
      callback: () => {window.open("#/launcher", "_self"); this.props.clearPopups()},
    }
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
