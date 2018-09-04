import React from 'react'
import FilterAS from "../../../_global/filters/FilterAS_Multi";
import FilterStand from "../../../../containers/_global/FilterStand_Single";
import FilterMarker from "../../../_global/filters/FilterMarker";
import FilterTag from "../../../_global/filters/FilterTags";
import FilterDate from "../../../_global/filters/FilterDate";
import FilterSidebar from "../../../../containers/_global/FilterSidebar";

class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {tests, chains, ...others} = this.props;

    const content = [
      <FilterMarker name='marker' key={'marker-filter'} chains={chains}/>,
      <FilterTag name='tags' key={'tags-filter'} tests={tests} />,
      <FilterDate key={'date-filter'} />,
      <FilterAS name='asystems' key={'system-filter'} tests={tests}/>,
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

export default (SearchBar);


