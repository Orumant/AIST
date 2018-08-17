import React from 'react'
import Notifications from 'react-notification-system-redux';
import PageContent from '../../../_global/PageContent'
import SearchBar from "./TestTable/SearchBar";

class TestTable extends React.Component {

  request = {};

  componentDidMount() {
    // const {fetchOrders} = this.props;
    // fetchOrders(this.request);
  }


  render() {
    const {fetchOrders, notifications} = this.props;

    const FilterBar = <SearchBar
      key='results-sidebar'
      submit={fetchOrders}
      startRequest={this.request}
    />;

    const Content = [
      <div>Page 2</div>,
      <Notifications key='results-notification' notifications={notifications}/>];

    return (
      <PageContent
        isFilter={true}
        FilterBar={FilterBar}
        content={Content}
      />
    )
  }
}

export default TestTable;
