import React from 'react';
import DateForm from "../../global/DateForm";
import FilterForm from "../../../containers/global/FilterForm";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";
import FilterTag from "../../global/FilterTag";
import FilterChains from "../../global/FilterChains";

import HeaderTitle from "./SearchBar/HeaderTitle";



class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {tests, chains,  ...others} = this.props;
    const options=[
      {name: 'as', label: 'АС', request_tag: 'asystems', form: <FilterAS  key={'system-filter'} tests={tests} {...others}/>},
      {name: 'stand', label: 'Контуру', request_tag: 'stand',form: <FilterStand  key={'stand-filter'} tests={tests} {...others}/>},
      {name: 'tags', label: 'Тегам', request_tag: 'tags', form: <FilterTag key={'tag-filter'} tests={tests} {...others}/>},
    ];
    return (
      <div className={'search-params'}>
        <HeaderTitle/>
        <FilterChains chains={chains} {...others}/>
        <DateForm {...others}/>
        <div className={'search-additional'}>
          <FilterForm filters={options} {...others}/>
        </div>
      </div>
    )
  }
}

export default SearchBar
