import React from 'react'
import { InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class FilterForm extends React.Component {

  state = {
    selectedFilter: [],
  }

  clearFilter = () => {
    const {updateRequestAndOrders, request, filters} = this.props;
    this.setState({selectedFilter: []});
    let empty_request = {};
    filters.forEach(filter => empty_request = {...empty_request, [filter.request_tag]: null});
    updateRequestAndOrders(empty_request, request)
  }

  renderSearches = () => {
    const {filters} = this.props;
    let searches = [];
    const {selectedFilter} = this.state;
    if (selectedFilter.length > 0) {
      selectedFilter.forEach((searchInd) => searches.push(filters[searchInd].form)
      )
    }
    return searches;
    };

    render() {
    const {filters} = this.props;

    const buttons = (filters) => {
      return filters.map((filter, ind) =>
        <ToggleButton key={filter.name} value={ind} style={ind === 0? {borderRadius: '0'} : null}>{filter.label}</ToggleButton>)
    };

      return [
        <InputGroup key={'additional-filters-form'}>
        <InputGroup.Addon >Фильтры:</InputGroup.Addon>
          <ToggleButtonGroup type='checkbox' name='filterSwitch' value={this.state.selectedFilter}
                             onChange={searchInd => this.setState({selectedFilter: searchInd})}>
            {buttons(filters)}
            {this.state.selectedFilter.length > 0
              ? <ToggleButton value={'reset'} bsStyle='danger'
                        onClick={this.clearFilter}>Сброс</ToggleButton>
              : null}
          </ToggleButtonGroup>
          </InputGroup>,
        <div className='search-select' key={'additional-filters'}>{this.renderSearches()}</div>
      ]
  }
}

export default FilterForm
