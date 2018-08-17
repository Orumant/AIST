import React from 'react';
import FilterAS from "../../../../_global/filters/FilterAS";
import FilterStand from "../../../../../containers/_global/FilterStand";
import FilterTag from "../../../../_global/filters/FilterTags";
import FilterSidebar from "../../../../../containers/_global/FilterSidebar";


class SearchBar extends React.Component {

  componentDidMount() {
    // const {fetchChainsTests} = this.props;
    // fetchChainsTests();
  }

  render () {
    const {tests, ...others} = this.props;

    const content = [
      <FilterAS name='asystems' key={'system-filter'} tests={["5"]}/>,
      <FilterStand name='stand' key={'stand-filter'}/>,
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
