import React from 'react';
import FilterTag from "../../../../_global/filters/FilterTags";
import FilterSidebar from "../../../../../containers/_global/FilterSidebar";
import FilterAS_Single from "../../../../_global/filters/FilterAS_Single";
import FilterStand_Multi from "../../../../../containers/_global/FilterStand_Multi";


class SearchBar extends React.Component {

  render () {
    const {tests, ...others} = this.props;

    const content = [
      <FilterAS_Single name='asystem' key={'system-filter'} tests={tests}/>,
      <FilterStand_Multi name='stands' key={'stand-filter'}/>,
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
