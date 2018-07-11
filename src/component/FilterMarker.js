import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterMarkersFromChains} from "../utils/filters/index";

class FilterMarker extends React.Component {

  state = {
    selectedMarker : null,
  }

  changeMarker = (marker) => {
    this.setState({selectedMarker: marker})
    if (marker) this.props.updateRequestAndOrders({marker: marker.label}, this.props.request)
    else this.props.updateRequestAndOrders({marker: marker}, this.props.request)
  }

  render ()  {
    const {selectedMarker} = this.state;
    const {chains} = this.props
    const options = arrayToOptions(filterMarkersFromChains(chains))
    return (
      <Select
        className='test-filter'
        options={options}
        wrapperStyle={{position: 'relative'}}
        placeholder={'Поиск данных по маркеру'}
        onChange={this.changeMarker}
        value={selectedMarker}
      />
    )
  }
}

export default FilterMarker
