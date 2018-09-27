import React, {Component} from 'react';
import TestsTable from "./TestsViewer/TestsTable";
import PageContent from "../../_global/PageContent";
import SearchBar from "./TestsViewer/SearchBar";
import Notifications from "react-notification-system-redux";
import FilterByName from "./TestsViewer/FilterByName";

class TestsViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentWillMount() {
    this.props.fetchTestsViewerTests();
  }

  handleNameSearching = (name) => {
    this.setState({name});
    this.props.filterByName(name);
  };

  render() {
    const {isLoading, tests, notifications, filterTests} = this.props;

    return(
      <PageContent isLoading={isLoading}
                   isFilter
                   tools={<FilterByName style={{width: '50%'}} id={1} onChange={this.handleNameSearching} value={this.state.name}/>}
                   FilterBar={
                     <SearchBar tests={tests} submit={filterTests} startRequest={{}}/>
                   }
                   content={[
                     <TestsTable tests={tests}/>,
                     <Notifications key='results-notification' notifications={notifications}/>
                   ]}/>
    )
  }
}

export default TestsViewer;
