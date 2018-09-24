import React from 'react';
import FilterTag from "../../../../_global/filters/FilterTags";
import FilterSidebar from "../../../../../containers/_global/FilterSidebar";
import FilterAS from "../../../../_global/filters/FilterAS";
import FilterStand from "../../../../../containers/_global/FilterStand";


class SearchBar extends React.Component {

  render () {
    const {tests, ...others} = this.props;

    const content = [
      <FilterAS name='asystem' key={'system-filter'} tests={tests}/>,
      <FilterStand isMulti name='stands' key={'stand-filter'}/>,
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
