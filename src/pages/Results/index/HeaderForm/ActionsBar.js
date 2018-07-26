import React from 'react'
import FilterBar from "../../../global/FilterBar";
import FilterAS from "../../../global/FilterAS";
import FilterStand from "../../../../containers/global/FilterStand";
import FiltersList from "./ActionsBar/FiltersList";
import FilterTag from "../../../global/FilterTag";
import {Button} from "react-bootstrap";


class ActionsBar extends React.Component {

  state = {
    selectedFilter: [],
  };



  updateFilters = (filters) => {
    this.setState({selectedFilter: filters})
  };

  clearFilters = () => {
    this.setState({selectedFilter: []});

    this.props.updateRequestAndOrders
  }

  render () {
    const {tests, ...others} = this.props;
    const {selectedFilter} = this.state;

    const filters = {
      as: <FilterAS key={'system-filter'} tests={tests} {...others}/>,
      stand: <FilterStand key={'stand-filter'} tests={tests} {...others}/>,
      tags: <FilterTag key={'tags-filter'} tests={tests} {...others}/>,
    };

    return (
      <div>
        <div>
          <FilterBar updateFilters={this.updateFilters} options={Object.keys(filters)}/>
        </div>
        <FiltersList selectedFilter={selectedFilter} filtersAll={filters}/>
      </div>
    )
  }
}

export default ActionsBar
