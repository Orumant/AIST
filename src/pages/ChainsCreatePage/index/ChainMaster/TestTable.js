import React from 'react'
import Notifications from 'react-notification-system-redux';
import PageContent from '../../../_global/PageContent'
import SearchBar from "./TestTable/SearchBar";
import PageNavigation from "./PageNavigation";
import ContentTable from "./TestTable/ContentTable";

class TestTable extends React.Component {

  state = {
    selectedTest: [],
  };

  request = {};

  onSelectTest = (selectedTest) => {
    this.setState({selectedTest})
  };

  getChainData = () => {
    const {selectedTest} = this.state;
    const {testsAll}  = this.props;
    return {tests: selectedTest.map(selectedId => testsAll[selectedId])}
  };


  render() {
    const {fetchOrders, notifications, testsAll, ...handleNavigation} = this.props;

    const FilterBar = <SearchBar
      key='results-sidebar'
      submit={fetchOrders}
      startRequest={this.request}
    />;

    const Content = [
      <ContentTable testsAll={testsAll} onSelectTest={this.onSelectTest}/>,
      <Notifications key='results-notification' notifications={notifications}/>];

    return [
      <PageContent
        isFilter={true}
        FilterBar={FilterBar}
        content={Content}
      />,
      <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
    ]
  }
}

export default TestTable;
