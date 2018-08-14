import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../utils/filters/index";
import FilterForm from "./FilterForm";

class FilterStand extends React.Component {

  componentDidMount() {
    this.props.getAllStands();
  }

  render ()  {
    const {stands, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(stands, 'code');

    return (
      <FilterForm
        name={name}
        label="Контур"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterStand

