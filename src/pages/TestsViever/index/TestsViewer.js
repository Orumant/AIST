import React, {Component} from 'react';
import TestsTable from "./TestsViewer/TestsTable";
import Paper from "@material-ui/core/es/Paper/Paper";
import Toolbar from "./TestsViewer/Toolbar";
import FilterTestsSidebar from "./TestsViewer/TestsTable/FilterTestsSidebar";
import TestFilters from "./TestsViewer/TestsTable/TestFilters";
import Loading from "react-loading";
import './style.css';
import PageContent from "../../_global/PageContent";
import SearchBar from "./TestsViewer/SearchBar";

//TODO Вставить сюда глоб. фильтры
class TestsViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    }
  }


  componentWillMount() {
    this.props.fetchAllDataNeeded();
  }

  handleSidebarOpening = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  };

  render() {
    const {isLoading, tests, systems, stands, tags, submitFilters, clearFilters} = this.props;
/*    const drawerProps = {
      open: this.state.sidebarOpen,
      onClose: this.handleSidebarOpening,
    };*/


//TODO Вкорячить фильтр по имени (tools);
//TODO реализовать запрос в test/filter
    return(
      <PageContent isLoading={isLoading}
                   isFilter
                   FilterBar={
                     <SearchBar tests={tests} submit={(stuff) => console.log(stuff)} startRequest={{}}/>
                   }
                   content={[
                     <TestsTable tests={tests} submitFilters={submitFilters}/>
                   ]}/>
    )
/*    return (
          <Paper elevation={2}>
            {isLoading ?
              <div className='loading'>
                <Loading key='page-content-loading' type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
              </div> : null}
            <Toolbar onClick={this.handleSidebarOpening}/>
            <FilterTestsSidebar drawerProps={drawerProps}>
              <TestFilters stands={stands}
                           systems={systems}
                           tags={tags}
                           submitFilters={submitFilters}
                           clearFilters={clearFilters}/>
            </FilterTestsSidebar>
            <TestsTable tests={tests} submitFilters={submitFilters}/>
          </Paper>
    )*/
  }
}

export default TestsViewer;
