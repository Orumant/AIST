import React from 'react';
import PageContent from '../../../_global/PageContent'
import SearchBar from "./SelectTest/SearchBar";
import PageNavigation from "./PageNavigation";
import ReorderTest from "./SelectTest/ReorderTest";
import Notifications from 'react-notification-system-redux';
import TestTable from "./SelectTest/TestTable";
// import TestTable from "../../../../containers/ChainsCreatePage/ChainMaster/SelectTest/TestTable";

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
    return {tests: selectedTest}
  };

  componentDidMount() {
    const {fetchFilterTests, data} = this.props;
    fetchFilterTests(this.request);
    this.setState({selectedTest: data.tests || []});
  }


  render() {
    const {fetchFilterTests, testsAll, tests, isFetching, onSelectTest, onSortTest, onDeleteTest, selectedTest, error, notifications, ...handleNavigation} = this.props;
    console.log(selectedTest)


    const FilterBar = <SearchBar
      key='results-sidebar'
      tests={testsAll}
      submit={fetchFilterTests}
      startRequest={this.request}
    />;

    const TestTableContent = [
      <div style={{display: 'flex'}}>
        <div className="reorderForm"><ReorderTest tests={selectedTest} onSortTest={onSortTest} onDelete={onDeleteTest}/></div>
        <div className="tableForm"><TestTable tests={tests} selectedTest={selectedTest} onSelectTest={onSelectTest}/></div>
      </div>,
      <Notifications key='results-notification' notifications={notifications}/>
    ];

    const SelectTestTable =  <PageContent
      error={error? "Выбранные тесты не имеют общего контура": ""}
      pageName="Порядок тестов"
      isFilter={true}
      isLoading={isFetching}
      FilterBar={FilterBar}
      content={TestTableContent}
    />;

    return [
      <div>{SelectTestTable}</div>,
      <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
    ]
  }
}

export default SelectTest;
