import React from 'react'
import FilterMarker from "./FilterMarker";
import FilterTag from "./FilterTag";
import FilterAS from "./FilterAS";
import FilterStand from "../../containers/global/FilterStand";
import {Button, ButtonGroup, ButtonToolbar, InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

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
      selectedFilter.map( (searchType) => {
        switch (searchType) {
          case 'as': {searches.push(<FilterAS tests={tests} {...others}/>); break}
          case 'stand': {searches.push(<FilterStand tests={tests} {...others}/>); break}
        }
      })
    }
    return searches;
    }

    render() {
      return [
        <InputGroup>
        <InputGroup.Addon>Фильтры:</InputGroup.Addon>
            <ButtonGroup block>
              <ToggleButtonGroup type='checkbox' name='searchesSwitcher' value={this.state.selectedFilter}
                                 onChange={searchType => this.setState({selectedFilter: searchType})} block>
                <ToggleButton style={{borderRadius: '0'}} value={'as'}>АС</ToggleButton>
                <ToggleButton value={'stand'}>Контуру</ToggleButton>
              </ToggleButtonGroup>
              {this.state.selectedFilter.length > 0
                ? <Button bsStyle='danger'
                          onClick={this.clearFilter}>Сброс</Button>
                : null}
            </ButtonGroup>
          </InputGroup>,
        <div className='search-select'>{this.renderSearches()}</div>
      ]
  }
}

export default FilterForm
