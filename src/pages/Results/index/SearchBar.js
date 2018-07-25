import React from 'react'
import DateForm from "../../global/DateForm";
import FilterChain from "../../../containers/global/FilterChain";
import FilterForm from "../../../containers/global/FilterForm";
import FilterBar from "../../global/FilterBar";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";


class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {dataLength, tests,  ...others} = this.props;
    const options=[
      {name: 'as', form: <FilterAS  key={'system-filter'} tests={tests} {...others}/>},
      {name: 'stand', form: <FilterStand  key={'stand-filter'} tests={tests} {...others}/>},];
    return (
      <div className={'search-params'}>
        <FilterBar options={options}/>
        <FilterChain {...others}/>
        <DateForm {...others}/>
        <div className={'search-additional'}>
          <FilterForm {...others}/>
        </div>
      </div>
    )
  }
}

export default SearchBar
