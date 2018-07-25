import React from 'react'
import {Button, DropdownButton, Glyphicon, MenuItem} from "react-bootstrap";


class FilterBar extends React.Component {

  state = {
    options: [],
    selectedFilter: [],
  }

  componentDidMount () {
    const {options} = this.props;
    const options_object = options.map((option, ind) => {return {ind: ind, filter: option}})
    this.setState({options: options_object});
    // this.setState({options: options});
  }

  addFilter = (option, ind) => {
    let selected = [...this.state.selectedFilter];
    let names = [...this.state.options];
    selected.push(option);
    names.splice(ind, 1);
    this.setState({options: names, selectedFilter: selected})
  }

  renderSearches = () => {
    const {options} = this.props;
    let searches = [];
    const {selectedFilter} = this.state;
    if (selectedFilter.length > 0) {
      selectedFilter.forEach((searchType) => searches.push(searchType.filter.form)

      )
    }
    return searches;
  }

  render() {
    const {options} = this.state;
    // const FilterOptions = options.map((option, ind) =>
    //   <MenuItem eventKey={ind} onClick={() => this.addFilter(option, ind)}>{option}</MenuItem>);
    const FilterOptions = options.map((option, ind) =>
      <MenuItem eventKey={option.ind} onClick={() => this.addFilter(option, ind)}>{option.filter.name}</MenuItem>);
    return [
      <DropdownButton
        className='header-buttons'
        title={[<Glyphicon glyph={"glyphicon glyphicon-filter"}/>, "Фильтр"]}
        key={"filter-form"}
      >
        {FilterOptions}
      </DropdownButton>,
      <div>{this.renderSearches()}</div>

    ]
  }
}

export default FilterBar
