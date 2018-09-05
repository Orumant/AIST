import React from 'react';
import FilterAS from "../../../_global/filters/FilterAS";
import FilterStand from "../../../../containers/_global/FilterStand";
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
      <FilterAS name='asystems' key={'system-filter'} tests={tests}/>,
      <FilterStand name='stand' key={'stand-filter'}/>,
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
