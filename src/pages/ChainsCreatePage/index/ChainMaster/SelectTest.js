import React from 'react';
import ReactDOM from 'react'
import PageContent from '../../../_global/PageContent'
import SearchBar from "./SelectTest/SearchBar";
import PageNavigation from "./PageNavigation";
import ContentTable from "./SelectTest/TestTable";
import ReorderTest from "./SelectTest/ReorderTest";
import Notifications from 'react-notification-system-redux';
import Typography from "@material-ui/core/Typography";

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
      <div style={{display: 'flex'}}>
        <div className="reorderForm"><ReorderTest tests={selectedTest}/></div>
        <div className="tableForm"><ContentTable tests={tests} onSelectTest={this.onSelectTest}/></div>
      </div>,
      <Notifications key='results-notification' notifications={notifications}/>
    ];

    const SelectTestTable =  <PageContent
      isFilter={true}
      isLoading={isFetching}
      FilterBar={FilterBar}
      content={TestTableContent}
    />;


    const Content = [
      <div>{SelectTestTable}</div>,
      <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
    ];

    return [
      Content,
    ]
  }
}

export default SelectTest;
