import React from 'react'
import {Button, DropdownButton, Glyphicon, MenuItem} from "react-bootstrap";


class FilterBar extends React.Component {

  state = {
    options: [],
    selectedFilter: [],
  }

  componentDidMount () {
    const {options} = this.props;
    // const options_object = options.map((option, ind) => {return {ind: ind, filter: option}})
    // this.setState({options: options_object});
    this.setState({options: options});
  }

  addFilter = (option, ind) => {
    let selected = [...this.state.selectedFilter];
    let names = [...this.state.options];
    selected.push(option);
    names.splice(ind, 1);
    this.setState({options: names, selectedFilter: selected});
    this.props.updateFilters(selected)
  }

  clearFilters = () => {
    const {options} = this.props;
    this.setState({options: options, selectedFilter: []});
    this.props.updateFilters([])
  }

  render() {
    const {options, selectedFilter} = this.state;
    const FilterOptions = options.map((option, ind) =>
      <MenuItem eventKey={ind} onClick={() => this.addFilter(option, ind)}>{option}</MenuItem>);
    // const FilterOptions = options.map((option, ind) =>
    //   <MenuItem eventKey={option.ind} onClick={() => this.addFilter(option, ind)}>{option.filter.name}</MenuItem>);
    return (
      <div>
        <div className={'clear-fix'}/>
        {selectedFilter.length > 0 ? <Button onClick={this.clearFilters}>Сброс Фильтров</Button> : null}
        {selectedFilter.length !== this.props.options.length ?
        <DropdownButton
          className='header-buttons'
          title={[<Glyphicon glyph={"glyphicon glyphicon-filter"}/>, "Фильтр"]}
          key={"filter-form"}
        >
          {FilterOptions}
        </DropdownButton>
          : null}
      </div>
    )
  }
}

export default FilterBar
