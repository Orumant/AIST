import React from 'react'
import FilterMarker from "./FilterMarker";
import FilterTag from "./FilterTag";

class FilterChain extends React.Component {

  state = {
    isTagFilter: true,
    isMarketFiler: true,
  }

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render() {
    const {chains, tests, ...others} = this.props;
    console.log(others)
    return (
      <div>
        {this.state.isMarketFiler ? <FilterMarker chains={chains} {...others}/>: null}
        {this.state.isTagFilter ? <FilterTag tests={tests} {...others}/>: null}
      </div>
    )
  }
}

export default FilterChain
