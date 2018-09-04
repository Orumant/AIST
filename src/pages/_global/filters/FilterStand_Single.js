import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterForm from "./base/FilterForm";

class FilterStand_Single extends React.Component {

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
        placeholder="Название контура"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterStand_Single

