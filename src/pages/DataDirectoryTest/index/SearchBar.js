import React from 'react'
import DateForm from "../../global/DateForm";
import FilterForm from "../../../containers/global/FilterForm";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";
import FilterMarker from "../../global/FilterMarker";
import FilterTag from "../../global/FilterTag";


class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {dataLength, chains, tests, ...others} = this.props;
    const options=[
      {name: 'as', label: 'АС', request_tag: 'asystems', form: <FilterAS  key={'system-filter'} tests={tests} {...others}/>},
      {name: 'stand', label: 'Контуру', request_tag: 'stand',form: <FilterStand  key={'stand-filter'} tests={tests} {...others}/>},
    ];

    return (
      <div className={'search-params'}>
        <FilterMarker chains={chains} {...others}/>
        <FilterTag tests={tests} {...others}/>
        <DateForm {...others}/>
        <div className={'search-additional'}>
          <FilterForm filters={options} {...others}/>
        </div>
        <div>Количество записей по выбранному маркеру: <b>{dataLength}</b></div>
      </div>
    )
  }
}

export default SearchBar
