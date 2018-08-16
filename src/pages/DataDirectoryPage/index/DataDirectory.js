import React from 'react'
import Notifications from 'react-notification-system-redux';

import PageContent from '../../_global/PageContent/index'
import SearchBar from "../../../containers/DataDirectoryPage/SearchBar";
import ArchiveCatalogTabs from "./DataDirectory/ArchiveCatalogTabs";
import "./style.css"

class DataDirectoryTest extends React.Component{

  state = {
    request: {locked: false, status: "SUCCESS"},
    isFirstChange: true,
  };

  infoPopup = {
    title: 'Не нашли что искали?',
    message: 'В таблице отображаются только успешно прошедшие тесты. Вы можете запустить нужную цепочку',
    position: 'bl',
    autoDismiss: 0,
    action: {
      label: 'Здесь',
      callback: () => {window.open("#/launcher", "_self"); this.props.clearPopup()},
    }
  };

  componentDidMount() {
    const {fetchOrders} = this.props;
    fetchOrders(this.state.request);
  }

  updateRequest = (val) => {
    const {fetchOrders, showPopup} = this.props;
    const {request, isFirstChange} = this.state;
    const new_request = {...request, locked: val };
    this.setState({request: new_request});
    fetchOrders(new_request);
    if (isFirstChange) {
      showPopup(this.infoPopup)
      this.setState({isFirstChange: false});
    }
  };

  render() {
    const {orders, fetchOrders, lockOrder, unlockOrder, isFetching, notifications} = this.props;
    const {request} = this.state;

    const FilterBar = <SearchBar key='data-directory-sidebar'
                                 submit={fetchOrders}
                                 startRequest={request}
                                 dataLength={orders.length}
    />;

    const Content = [
      <ArchiveCatalogTabs key='archive-catalog-tabs' data={orders} request={request} fetchOrders={fetchOrders} lockOrder={lockOrder} unlockOrder={unlockOrder} updateRequest={this.updateRequest}/>,
      <Notifications key='data-directory-notification' notifications={notifications}/>
    ];

    return (
      <PageContent isFilter={true}
                   isLoading={isFetching}
                   FilterBar={FilterBar}
                   content={Content}/>
    )
  }
}


export default DataDirectoryTest;
