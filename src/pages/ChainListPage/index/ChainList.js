import React from 'react'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import PageContent from '../../_global/PageContent'
import SearchBar from "../../../containers/ChainListPage/SearchBar";
import ChainsTable from "./ChainList/ChainsTable";
import {CreateButton} from "./ChainList/ChainsTable/Buttons";

class ChainsList extends React.Component {

  request = {};

  componentDidMount() {
    const {fetchChains, fetchTestsData} = this.props;
    fetchChains(this.request);
    fetchTestsData();
  }

  render() {
    const { chains, chains_editable, fetchChains, testsAll, isFetching } = this.props;

    const FilterBar = <SearchBar
      key='chain-list-sidebar'
      submit={fetchChains}
      startRequest={this.request}
    />;

    const table = [<ChainsTable key='chains-table' data={chains} testsAll={testsAll} chains_editable={chains_editable}/>];

    return (
          <PageContent isFilter={true} isLoading={isFetching} FilterBar={FilterBar} content={table} tools={CreateButton()}/>
      );
}
}

export default ChainsList;
