import React from 'react'
import DateForm from "../../global/DateForm";
import FilterChain from "../../../containers/global/FilterChain";
import FilterForm from "../../../containers/global/FilterForm";


class SearchBar extends React.Component {

  render () {
    const {dataLength, ...others} = this.props;
    return (
      <div className={'search-params'}>
        <FilterChain {...others}/>
        <DateForm {...others}/>
        <div className={'search-additional'}>
          <FilterForm {...others}/>
        </div>
        <div>Количество записей по выбранному маркеру: <b>{dataLength}</b></div>
      </div>
    )
  }
}

export default SearchBar
