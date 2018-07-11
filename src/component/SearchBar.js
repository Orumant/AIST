import React from 'react'
import DateForm from "./DateForm";
import FilterChain from "../containers/FilterChain";
import {Button} from "react-bootstrap";


class SearchBar extends React.Component {

  render () {
    const {button, dataLenght, ...others} = this.props;
    return (
      <div className={'search-params'}>
        <div className={'search-box'}>
          <FilterChain {...others}/>
          <DateForm {...others}/>
          <div>Количество записей по выбранному маркеру: <b>{dataLenght}</b></div>
        </div>
       <div className={'search-box'}>
         {button}
       </div>
        <div className={'search-box'}>
         <Button block>Подобрать цепочки по маркеру</Button>
        </div>
      </div>
    )
  }
}

export default SearchBar
