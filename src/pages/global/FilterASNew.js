import React from 'react'
import {filterPropertyFromObjects} from "../../utils/filters/index";
import FilterForm from "./FilterForm";

class FilterAS extends React.Component {

  handleChange = (request) => {
    const {onChange, name} = this.props;
    const val = request[name];
    request[name] = [val];
    onChange(request);
  };

  render ()  {
    const {tests, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(tests, 'a_system');

    return (
      <FilterForm
        name={name}
        label="Система"
        options={options}
        onChange={this.handleChange}
        value={value}
      />
    )
  }
}

export default FilterAS

