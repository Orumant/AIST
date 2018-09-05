import React from 'react'
import {Tab, Tabs} from "react-bootstrap";
import OrdersTable from "../../../../containers/DataDirectoryPage/OrdersTable";

class ArchiveCatalogTabs extends React.Component {

  state = {
    key: 1,
  };

  handleSelect = (key) => {
    let {updateRequest} = this.props;
    if (key === 1) updateRequest(false)
    else updateRequest(true);
    this.setState({key});
  };


  render () {
    const {key} = this.state;
    const {...props} = this.props;
    return (
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
    )
  }
}

export default ArchiveCatalogTabs
