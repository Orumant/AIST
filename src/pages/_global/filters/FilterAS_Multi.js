import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterFormMultiple from "./base/FilterFormMultiple";

class FilterAS_Multi extends React.Component {

  //TODO: Сделать один элемент для single/multiple choice

  render ()  {
    const {tests, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(tests, 'a_system');

    return (
      <FilterFormMultiple
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

export default FilterAS_Multi

