import React from 'react'
import DateForm from "../../global/DateForm";
import FilterChain from "../../../containers/FilterChain";
import {Button} from "react-bootstrap";


class SearchBar extends React.Component {

  render () {
    const {button, dataLenght, openChainsForm, ...others} = this.props;
    return (
      <div className={'search-params'}>
        <FilterChain {...others}/>
        <DateForm {...others}/>
        <div>Количество записей по выбранному маркеру: <b>{dataLenght}</b></div>
      </div>
    )
  }
}

export default SearchBar
