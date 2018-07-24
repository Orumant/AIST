import React from 'react'
import FilterAS from "./FilterAS";
import FilterStand from "../../containers/global/FilterStand";
import {Button, InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class FilterForm extends React.Component {

  state = {
    selectedFilter: [],
  }

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  clearFilter = () => {
    const {updateRequestAndOrders, request} = this.props;
    this.setState({selectedFilter: []});
    updateRequestAndOrders({asystems: null, stand: null}, request)
  }

  renderSearches = () => {
    const {tests, ...others} = this.props;
    let searches = [];
    const {selectedFilter} = this.state;
    if (selectedFilter.length > 0) {
      selectedFilter.forEach((searchType) => {
        switch (searchType) {
          case 'as': {searches.push(<FilterAS  key={'system-filter'} tests={tests} {...others}/>); break}
          case 'stand': {searches.push(<FilterStand  key={'stand-filter'} tests={tests} {...others}/>); break}
          default:
            return null
        }
      })
    }
    return searches;
    }

    render() {
      return [
        <InputGroup key={'additional-filters-form'}>
        <InputGroup.Addon >Фильтры:</InputGroup.Addon>
          <ToggleButtonGroup type='checkbox' name='filterSwitch' value={this.state.selectedFilter}
                             onChange={searchType => this.setState({selectedFilter: searchType})}>
            <ToggleButton value={'as'} style={{borderRadius: '0'}}>АС</ToggleButton>
            <ToggleButton value={'stand'}>Контуру</ToggleButton>
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
