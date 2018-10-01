import React, {Component} from 'react';
import TestsTable from "./TestsViewer/TestsTable";
import PageContent from "../../_global/PageContent";
import SearchBar from "../../../containers/TestViewer/SearchBar";
import Notifications from "react-notification-system-redux";
import FilterByName from "./TestsViewer/FilterByName";
import ClearIcon from '@material-ui/icons/Clear';

const style = {
  position: 'absolute',
  left: 40,
  top: 88,
  width: '40%'
};

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

    const tools =
      <div style={style}>
        <FilterByName id={'searchTestsByNameInputField'}
                      onChange={this.handleNameSearching}
                      value={this.state.name} style={{width: '90%'}}/>
        {this.state.name.length > 0 &&
        <ClearIcon onClick={() => this.handleNameSearching('')}
                   style={{width: '10px !important', cursor: 'pointer'}}/>}
      </div>;
    const filterBar = <SearchBar tests={tests} submit={filterTests} startRequest={{}}/>;

    const content = [
      <TestsTable tests={tests}/>,
      <Notifications key='results-notification' notifications={notifications}/>,
    ];

    return (
      <PageContent isLoading={isLoading}
                   isFilter
                   tools={tools}
                   FilterBar={filterBar}
                   content={content}/>
    )
  }
}

export default TestsViewer;
