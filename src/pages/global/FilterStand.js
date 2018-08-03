import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../utils/filters/index";

class FilterAS extends React.Component {

  state = {
    selectedStand : null,
  };

  changeStand = (stand) => {
    this.setState({selectedStand: stand});
    if (stand) this.props.updateRequestAndOrders({stand: stand.label}, this.props.request);
    else this.props.updateRequestAndOrders({stand: stand}, this.props.request)
  };

  componentDidMount() {
    this.props.getAllStands();
  }

  render ()  {
    const {selectedStand} = this.state;
    const {stands} = this.props;
    const options = arrayToOptions(filterPropertyFromObjects(stands, 'code'));
    return (
      <Select
        options={options}
        className='test-filter'
        placeholder={'Фильтрация тестов по контуру'}
        onChange={this.changeStand}
        value={selectedStand}
      />
    )
  }
}

export default FilterAS

