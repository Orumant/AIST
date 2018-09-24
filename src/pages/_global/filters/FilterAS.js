import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterForm from "./base/FilterForm";

class FilterAS extends React.Component {

  render ()  {
    const {tests, onChange, name, value, isMulti} = this.props;
    const options = filterPropertyFromObjects(tests, 'a_system');

    return (
      <FilterForm
        isMulti={isMulti}
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

export default FilterAS

