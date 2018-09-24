import React from 'react';
import FilterFormSingle from "./FilterForm/FilterFormSingle";
import FilterFormMultiple from "./FilterForm/FilterFormMultiple";

class FilterForm extends React.Component {


  render ()  {
    const {isMulti, ...others} = this.props;

    return (
      isMulti? <FilterFormMultiple {...others}/> :  <FilterFormSingle {...others}/>
    )
  }
}


export default FilterForm

