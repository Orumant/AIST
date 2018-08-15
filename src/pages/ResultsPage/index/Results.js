import React from 'react'
import Notifications from 'react-notification-system-redux';
import PageContent from '../../_global/PageContent'
import TestsTable from "../../../containers/ResultsPage/TestTable";
import SearchBar from "../../../containers/ResultsPage/SearchBar";
import './style.css'

class Results extends React.Component {

  state = {
    isNewPage: true,
  };

  request = {};

  componentDidMount() {
    const {fetchOrders} = this.props;
    this.setState({isNewPage: true});
    fetchOrders(this.request);
  }

  changePageFlag = () => {
    this.setState({isNewPage: false});
  };


  render() {
    const {fetchOrders, orders, notifications, isFetching} = this.props;
    const {isNewPage} = this.state;

    const FilterBar = <SearchBar
      key='results-sidebar'
      submit={fetchOrders}
      startRequest={this.request}
      />;


      const Content = [
        <TestsTable key='results-table' orders={orders}/>,
        <Notifications key='results-notification' notifications={notifications}/>];

    return (
      <PageContent
        isFilter={true}
        isLoading={isFetching}
        FilterBar={FilterBar}
        content={Content}
      />
    )
  }
}

export default Results;
