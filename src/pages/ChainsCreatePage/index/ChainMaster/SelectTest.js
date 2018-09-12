import React from 'react';
import PageContent from '../../../_global/PageContent'
import SearchBar from "./SelectTest/SearchBar";
import PageNavigation from "./PageNavigation";
import ReorderTest from "./SelectTest/ReorderTest";
import Notifications from 'react-notification-system-redux';
import TestTable from "./SelectTest/TestTable";
import AlertPopup from "./SelectTest/AlertPopup";

class SelectTest extends React.Component {

  state = {
    isDeleted: false,
    isOpenPopup: false,
  };

  request = {};

  onDeleteStart = (ind) => {
    const {onDeleteTest} = this.props;
    this.setState({isDeleted: true});
    onDeleteTest(ind);
  };

  onDeleteEnd = () => {
    this.setState({isDeleted: false});
  };

  getChainData = () => {
    const {selectedTest} = this.props;
    return {tests: selectedTest}
  };

  onNext = (data) => {
    const { handleNext, error, selectedTest } = this.props;
    if (!error && selectedTest.length > 0) handleNext(data);
    if (selectedTest.length === 0) this.setState({isOpenPopup: true})
  };

  onClosePopup = () => {
    this.setState({isOpenPopup: false});
  };

  submitFilter = (request) => {
    const {fetchFilterTests, data} = this.props;
    fetchFilterTests(request, data);
  };

  componentDidMount() {
    const {fetchFilterTests, data, dataUpdated, needUpdate} = this.props;
    fetchFilterTests(this.request, data, needUpdate);
    if (needUpdate) dataUpdated();
  }

  render() {
    const {testsAll, tests,
      isFetching, onSelectTest, onSortTest, selectedTest, error, notifications, handleNext,  ...handleNavigation} = this.props;
    const {isDeleted, isOpenPopup} = this.state;


    const FilterBar = <SearchBar
      key='results-sidebar'
      tests={testsAll}
      submit={this.submitFilter}
      startRequest={this.request}
    />;

    const TestTableContent = [
      <div style={{display: 'flex'}}>
        <div className="reorderForm"><ReorderTest tests={selectedTest} onSortTest={onSortTest} onDelete={this.onDeleteStart}/></div>
        <div className="tableForm"><TestTable tests={tests} selectedTest={selectedTest} onSelectTest={onSelectTest} isDeleted={isDeleted} onDelete={this.onDeleteEnd}/></div>
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
      <PageNavigation chain_data={this.getChainData()} handleNext={this.onNext} {...handleNavigation}/>,
      <AlertPopup isOpen={isOpenPopup} onClose={this.onClosePopup}/>
    ]
  }
}

export default SelectTest;
