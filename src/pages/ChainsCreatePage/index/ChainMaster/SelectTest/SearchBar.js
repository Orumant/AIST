import React from 'react';
import FilterTag from "../../../../_global/filters/FilterTags";
import FilterSidebar from "../../../../../containers/_global/FilterSidebar";
import FilterASone from "../../../../_global/filters/FilterASone";
import FilterStandMulti from "../../../../../containers/_global/FilterStandMulti";


class SearchBar extends React.Component {

  render () {
    const {tests, ...others} = this.props;

    const content = [
      <FilterASone name='asystem' key={'system-filter'} tests={tests}/>,
      <FilterStandMulti name='stands' key={'stand-filter'}/>,
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
