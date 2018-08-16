import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterForm from "./base/FilterForm";

class FilterAS extends React.Component {

  handleChange = (request) => {
    const {onChange, name} = this.props;
    const val = request[name];
    request[name] = val? [val]: val;
    onChange(request);
  };

  render ()  {
    const {tests, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(tests, 'a_system');

    return (
      <FilterForm
        name={name}
        label="Система"
        placeholder="Название системы"
        options={options}
        onChange={this.handleChange}
        value={value}
      />
    )
  }
}

export default FilterAS

