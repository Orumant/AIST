import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {Tab, Tabs} from "react-bootstrap";
import OrdersTable from "../../../containers/DataDirectoryTest/OrdersTable";


class ArchiveCatalogTabs extends React.Component {

  state = {
    key: 1,
  };

  handleSelect = (key) => {
    const {updateRequestAndOrders, request} = this.props;
    if (key === 1) updateRequestAndOrders({locked: false}, request)
    else updateRequestAndOrders({locked: true}, request)
    this.setState({key})
  };


  render () {
    const {key} = this.state;
    const {...props} = this.props;
    return (
      <div className={'view-results-table'}>
        <Tabs
          activeKey={key}
          onSelect={this.handleSelect}>
          <Tab eventKey={1} title="Реестр">
            <OrdersTable {...props}/>
          </Tab>
          <Tab eventKey={2} title="Архив">
            <OrdersTable {...props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ArchiveCatalogTabs
