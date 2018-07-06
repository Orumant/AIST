import React from 'react'
import DateForm from "./DateForm";
import FilterChain from "../containers/FilterChain";
import {Button} from "react-bootstrap";


class SearchBar extends React.Component {

  render () {
    const {button, dataLenght, ...others} = this.props;
    return (
      <div className={'search-params'}>
        <FilterChain {...others}/>
        <DateForm {...others}/>
        <div>Количество записей по выбранному маркеру : {dataLenght}</div>
        <Button>Подобрать цепочки по маркеру</Button>
        {button}
      </div>
    )
  }
}

export default SearchBar
