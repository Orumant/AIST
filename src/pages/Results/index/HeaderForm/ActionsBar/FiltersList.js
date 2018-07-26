import React from 'react'
import {Button, DropdownButton, Glyphicon, MenuItem} from "react-bootstrap";


class FiltersList extends React.Component {
  render() {

    const {selectedFilter, filtersAll} = this.props;
    let searches = [];
    if (selectedFilter.length > 0) {
      selectedFilter.forEach((searchType) => searches.push(filtersAll[searchType])

      )
    }
    return searches;
  }
}

export default FiltersList
