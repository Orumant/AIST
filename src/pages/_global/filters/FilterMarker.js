import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterForm from "./base/FilterForm";

class FilterMarker extends React.Component {

  render ()  {
    const {chains, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(chains, 'marker');
    return (
      <FilterForm
        name={name}
        label="Маркер"
        placeholder="Название маркера"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterMarker
