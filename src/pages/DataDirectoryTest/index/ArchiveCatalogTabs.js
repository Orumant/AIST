import React from 'react'
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
          id={'ArchiveCatalogTabs'}
          activeKey={key}
          onSelect={this.handleSelect}>
          <Tab id_order={'1'} eventKey={1} title="Реестр">
            <OrdersTable {...props}/>
          </Tab>
          <Tab id_order={'2'} eventKey={2} title="Архив">
            <OrdersTable {...props}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default ArchiveCatalogTabs
