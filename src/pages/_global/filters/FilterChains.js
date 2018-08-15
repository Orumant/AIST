import React from 'react'
import FilterForm from "./base/FilterForm";
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../../utils/filters/index";

class FilterChains extends React.Component {

  render ()  {
    const {chains, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(chains, 'name');
    return (
      <FilterForm
        name={name}
        label="Цепочка"
        placeholder="Название цепочки"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterChains


