import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterTagsFromTests, optionsToArray} from "../utils/filters/index";

class FilterTag extends React.Component {

  state = {
    selectedTag: [],
  }

  changeTag = (tag) => {
    this.setState({selectedTag: tag})
    this.props.updateRequestAndOrders({tags: optionsToArray(tag)}, this.props.request)
  }

  render ()  {
    const {selectedTag} = this.state;
    const {tests} = this.props
    const options = arrayToOptions(filterTagsFromTests(tests))
    return (
      <Select
        multi
        value={selectedTag}
        placeholder={'Поиск данных по тегам'}
        options={options}
        onChange={this.changeTag}
      />
    )
  }
}

export default FilterTag
