import React from 'react';
import FilterStand from "../../../../containers/_global/FilterStand";
import FilterAS from "../../../_global/filters/FilterAS";
import FilterTag from "../../../_global/filters/FilterTags";
import FilterSidebar from "../../../../containers/_global/FilterSidebar";
import FilterMarker from "../../../_global/filters/FilterMarker";


class SearchBar extends React.Component {

  componentDidMount() {
    const {fetchChainsTests} = this.props;
    fetchChainsTests();
  }

  render () {
    const {tests, chains, ...others} = this.props;

    const content = [
      <FilterAS name='asystems' key={'chain-as-filter'} isMulti tests={tests}/>,
      <FilterTag name='tag_names' key={'tag-filter'} tests={tests} />,
      <FilterMarker name='marker' key={'marker-filter'} chains={chains}/>,
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
