import React from 'react';
import FilterStand from "../../../../containers/_global/FilterStand";
import FilterTag from "../../../_global/filters/FilterTags";
import FilterChains from "../../../_global/filters/FilterChains";
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
      <FilterChains name='name' key={'chain-name-filter'} chains={chains}/>,
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
