import React from 'react'
import FilterMarker from "./FilterMarker";
import FilterTag from "./FilterTag";
import FilterAS from "./FilterAS";
import FilterStand from "../../containers/global/FilterStand";
import FilterForm from "./FilterForm";

class FilterChain extends React.Component {

  state = {
    isTagFilter: true,
    isMarketFiler: true,
  };

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render() {
    const {chains, tests, ...others} = this.props;
    return (
      <div>
        {this.state.isMarketFiler ? <FilterMarker chains={chains} {...others}/>: null}
        {this.state.isTagFilter ? <FilterTag tests={tests} {...others}/>: null}
      </div>
    )
  }
}

export default FilterChain
