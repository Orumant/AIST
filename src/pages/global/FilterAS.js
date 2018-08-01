import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../utils/filters/index";

class FilterAS extends React.Component {

  state = {
    selectedAS : null,
  };

  changeAS = (asystem) => {
    //TODO: Сделать один универсальный модуль генерации фильтров
    this.setState({selectedAS: asystem});
    if (asystem) this.props.updateRequestAndOrders({asystems: [asystem.label]}, this.props.request);
    else this.props.updateRequestAndOrders({asystems: asystem}, this.props.request)
  };

  render ()  {
    const {selectedAS} = this.state;
    const {tests} = this.props;
    const options = arrayToOptions(filterPropertyFromObjects(tests, 'a_system'));
    return (
      <Select
        options={options}
        placeholder={'Фильтрация тестов по АС'}
        onChange={this.changeAS}
        value={selectedAS}
      />
    )
  }
}

export default FilterAS

