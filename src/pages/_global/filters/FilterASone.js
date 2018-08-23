import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterForm from "./base/FilterForm";

class FilterASone extends React.Component {

  render ()  {
    const {tests, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(tests, 'a_system');

    return (
      <FilterForm
        name={name}
        label="Система"
        placeholder="Название системы"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterASone

