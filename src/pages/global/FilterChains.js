import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../utils/filters/index";

class FilterChains extends React.Component {

  state = {
    selectedChain : null,
  };

  changeChain = (chain_name) => {
    this.setState({selectedChain: chain_name});
    if (chain_name) this.props.updateRequestAndOrders({chain: chain_name.label}, this.props.request);
    else this.props.updateRequestAndOrders({chain: chain_name}, this.props.request)
  };

  render ()  {
    const {selectedChain} = this.state;
    const {chains} = this.props;
    const options = arrayToOptions(filterPropertyFromObjects(chains, 'name'));
    return (
      <Select
        options={options}
        className='test-filter'
        placeholder={'Поиск цепочки по названию'}
        onChange={this.changeChain}
        value={selectedChain}
      />
    )
  }
}

export default FilterChains

