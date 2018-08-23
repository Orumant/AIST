import React from 'react'
import {filterPropertyFromObjects} from "../../../utils/filters/index";
import FilterFormMultiple from "./base/FilterFormMultiple";

class FilterStandMulti extends React.Component {

  componentDidMount() {
    this.props.getAllStands();
  }

  render ()  {
    const {stands, onChange, name, value} = this.props;
    const options = filterPropertyFromObjects(stands, 'code');

    return (
      <FilterFormMultiple
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

export default FilterStandMulti

