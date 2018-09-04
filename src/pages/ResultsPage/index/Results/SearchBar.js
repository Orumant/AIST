import React from 'react';
import FilterAS_Multi from "../../../_global/filters/FilterAS_Multi";
import FilterStand_Single from "../../../../containers/_global/FilterStand_Single";
import FilterTag from "../../../_global/filters/FilterTags";
import FilterChains from "../../../_global/filters/FilterChains";
import FilterSidebar from "../../../../containers/_global/FilterSidebar";
import FilterDate from "../../../_global/filters/FilterDate";


class SearchBar extends React.Component {

  componentDidMount() {
    const {fetchChainsTests} = this.props;
    fetchChainsTests();
  }

  render () {
    const {tests, chains, ...others} = this.props;

    const content = [
      <FilterChains key={'chain-name-filter'} name='chain' chains={chains}/>,
      <FilterDate key={'date-filter'}/>,
      <FilterAS_Multi name='asystems' key={'system-filter'} tests={tests}/>,
      <FilterStand_Single name='stand' key={'stand-filter'}/>,
      <FilterTag name='tags' key={'tag-filter'} tests={tests} />,
    ];

    return (
      <FilterSidebar
        content={content}
        {...others}
      />
    )
  }
}

export default SearchBar;
