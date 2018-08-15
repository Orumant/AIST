import React from 'react';
import FilterAS from "../../../global/FilterASNew";
import FilterStand from "../../../../containers/global/FilterStandNew";
import FilterTag from "../../../global/FilterTagsNew";
import FilterChains from "../../../global/FilterChains";
import FilterSidebar from "../../../../containers/global/FilterSidebar";
import FilterDate from "../../../global/FilterDate";


class SearchBar extends React.Component {

  componentDidMount() {
    const {isNewPage} = this.props;
    if (isNewPage) this.props.fetchChainsTests();
  }

  render () {
    const {tests, chains, ...others} = this.props;

    const content = [
      <FilterChains name='chain' chains={chains}/>,
      <FilterDate />,
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
