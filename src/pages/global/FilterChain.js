import React from 'react'
import FilterMarker from "./FilterMarker";
import FilterTag from "./FilterTag";

class FilterChain extends React.Component {

  state = {
    isTagFilter: true,
    isMarkerFiler: true,
  };

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render() {
    const {chains, tests, ...others} = this.props;
    return (
      <div>
        {this.state.isMarkerFiler ? <FilterMarker chains={chains} {...others}/>: null}
        {this.state.isTagFilter ? <FilterTag tests={tests} {...others}/>: null}
      </div>
    )
  }
}

export default FilterChain
