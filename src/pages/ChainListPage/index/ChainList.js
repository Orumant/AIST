import React from 'react'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import PageContent from '../../_global/PageContent'
import SearchBar from "../../../containers/ChainListPage/SearchBar";
import ChainsTable from "./ChainList/ChainsTable";
import {CreateButton} from "./ChainList/ChainsTable/Buttons";
import FilterByName from "./ChainList/FilterByName";

class ChainsList extends React.Component {

  request = {};

  componentDidMount() {
    const {fetchChains, fetchTestsData} = this.props;
    fetchChains(this.request);
    fetchTestsData();
  }

  render() {
    const {chains, chains_editable, fetchChains, testsAll, filterByName, isFetching} = this.props;

    const FilterBar = <SearchBar
      key='chain-list-sidebar'
      submit={fetchChains}
      startRequest={this.request}
    />;

    const table = [<ChainsTable key='chains-table' data={chains} testsAll={testsAll}
                                chains_editable={chains_editable}/>];
    const tools =[
        <div style={{flexGrow: '1'}}><FilterByName onChange={filterByName}/></div>,
        CreateButton(),
    ];

    const style = {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    };

    return (
      <PageContent isFilter={true}
                   isLoading={isFetching}
                   FilterBar={FilterBar}
                   content={table}
                   tools={tools}
                   toolbarStyle={style}
      />
    );
  }
}

export default ChainsList;
