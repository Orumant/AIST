import React from 'react'
import FilterFormMultiple from "./FilterFormMultiple";
import {filterTagsFromTests} from "../../utils/filters/index";

class FilterTag extends React.Component {

  render ()  {
    const {tests, onChange, name, value} = this.props;
    const options = filterTagsFromTests(tests);

    return (
      <FilterFormMultiple
        name={name}
        label="Теги"
        placeholder="Список тегов"
        options={options}
        onChange={onChange}
        value={value}
      />
    )
  }
}

export default FilterTag

