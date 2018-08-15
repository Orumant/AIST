import React from 'react'
import PropTypes from 'prop-types';
import DateForm from "../../global/DateForm";
import FilterAS from "../../global/FilterASNew";
import FilterStand from "../../../containers/global/FilterStandNew";
import FilterMarker from "../../global/FilterMarker";
import FilterTag from "../../global/FilterTagsNew";

import FilterDate from "../../global/FilterDate";
import FilterSidebar from "../../../containers/global/FilterSidebar";

class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {tests, chains, ...others} = this.props;

    const content = [
      <FilterMarker name='marker' chains={chains}/>,
      <FilterTag name='tags' key={'tag-filter'} tests={tests} />,
      <FilterDate />,
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


