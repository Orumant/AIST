import React from 'react'
import Notifications from 'react-notification-system-redux';

import Header from "../../components/Header";
import TestsTable from "./index/TestsTable";
import SearchBar from "../../containers/Results/SearchBar";
import './style.css'
import HeaderForm from "./index/HeaderForm";

class ResultsPage extends React.Component {

  componentDidMount() {
    const {updateRequestAndOrders, request} = this.props;
    updateRequestAndOrders({}, request)
  }

  render() {
    const {fetchOrders, updateRequestAndOrders, request, orders, notifications} = this.props;
    return (
      <div style={{height: '100%'}}>
        <Header/>
        <SearchBar onChange={fetchOrders}
                   dataLength={orders.length}
                   request={request}
                   updateRequestAndOrders={updateRequestAndOrders}/>
        <div className={'view-results-table'}>
          <HeaderForm/>
          <TestsTable orders={orders}/>
        </div>
        <Notifications notifications={notifications}/>
      </div>

    )
  }
}

export default ResultsPage
