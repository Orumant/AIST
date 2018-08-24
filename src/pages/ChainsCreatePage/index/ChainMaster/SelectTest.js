import React from 'react';
import ReactDOM from 'react'
import PageContent from '../../../_global/PageContent'
import SearchBar from "./SelectTest/SearchBar";
import PageNavigation from "./PageNavigation";
import ContentTable from "./SelectTest/TestTable";
import ReorderTest from "./SelectTest/ReorderTest";
import Notifications from 'react-notification-system-redux';

class SelectTest extends React.Component {

  state = {
    selectedTest: [],
  };

  request = {};

  onSelectTest = (selectedTest) => {
    this.setState({selectedTest})
  };

  getChainData = () => {
    const {selectedTest} = this.state;
    const {tests}  = this.props;
    return {tests: selectedTest.map(selectedId => tests[selectedId])}
  };

  componentDidMount() {
    const {fetchFilterTests} = this.props;
    fetchFilterTests(this.request)
  }


  render() {
    const {fetchFilterTests, testsAll, tests, isFetching, notifications, ...handleNavigation} = this.props;
    const {selectedTest} = this.state;
    console.log(selectedTest)


    const FilterBar = <SearchBar
      key='results-sidebar'
      tests={testsAll}
      submit={fetchFilterTests}
      startRequest={this.request}
    />;

    const TestTableContent = [
      <ContentTable tests={tests} onSelectTest={this.onSelectTest}/>,
      <Notifications key='results-notification' notifications={notifications}/>
    ];

    const SelectTestTable =  <PageContent
      isFilter={true}
      isLoading={isFetching}
      FilterBar={FilterBar}
      content={TestTableContent}
    />;


    const Content = [
      <div className="reorderForm">
        <div style={{height: '100%', overflow: 'auto'}}><ReorderTest tests={selectedTest}/></div>
        <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
      </div>,
      <div className="tableForm">{SelectTestTable}</div>];

    return [
      Content,
    ]
  }
}

export default SelectTest;
