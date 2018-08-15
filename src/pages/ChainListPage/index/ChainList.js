import React from 'react'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import PageContent from '../../_global/PageContent'
import SearchBar from "../../../containers/ChainListPage/SearchBar";
import ChainsTable from "./ChainList/ChainsTable";

class ChainsList extends React.Component {

  request = {};

  componentDidMount() {
    const {fetchChains, fetchTestsData} = this.props;
    fetchChains(this.request);
    fetchTestsData();
  }

  render() {
    const { chains, fetchChains, testsAll } = this.props;

    const FilterBar = <SearchBar
      key='chain-list-sidebar'
      submit={fetchChains}
      startRequest={this.request}
    />;

    const table = <ChainsTable data={chains} testsAll={testsAll}/>;

    return (
          <PageContent isFilter={true} FilterBar={FilterBar} content={table}/>
      );
}
}

export default ChainsList;
