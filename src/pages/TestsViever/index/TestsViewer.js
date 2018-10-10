import React, {Component} from 'react';
import TestsTable from "./TestsViewer/TestsTable";
import PageContent from "../../_global/PageContent";
import SearchBar from "../../../containers/TestViewer/SearchBar";
import Notifications from "react-notification-system-redux";
import FilterByName from "./TestsViewer/FilterByName";
import ClearIcon from '@material-ui/icons/Clear';
import Button from "@material-ui/core/Button/Button";
import {Link} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
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

    const tools = [
      <div style={{width: '100%'}} key={'SearchByNameField'}>
        <FilterByName id={'searchTestsByNameInputField'}
                      onChange={this.handleNameSearching}
                      value={this.state.name} style={{width: '50%'}}/>
        {this.state.name.length > 0 &&
        <ClearIcon onClick={() => this.handleNameSearching('')}
                   style={{width: '10px !important', cursor: 'pointer'}}/>}
      </div>,
      <Button component={Link}
              key={'create-test-button'}
              to={'/test/create'}
              title="Создать">
        <AddIcon style={{marginRight: '8px'}}/>
        Создать
      </Button>
    ];
    const filterBar = <SearchBar tests={tests}
                                 submit={filterTests}
                                 startRequest={{}}/>;

    const content = [
      <TestsTable key={'TestsViewerTable'} tests={tests}/>,
      <Notifications key='results-notification' notifications={notifications}/>,
    ];

    return (
      <PageContent isLoading={isLoading}
                   isFilter
                   tools={tools}
                   FilterBar={filterBar}
                   content={content}
                   toolbarStyle={style}/>
    )
  }
}

export default TestsViewer;
