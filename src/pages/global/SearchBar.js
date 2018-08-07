import React from 'react'
import {Glyphicon, InputGroup} from "react-bootstrap";
import Select from "react-select";

class SearchBar extends React.Component {
  render() {
    const {
      options,
      onOptionClick,
      placeholder = 'Поиск ...',
      ...props,
    } = this.props;
    return(
      <InputGroup className='search-bar'>
        <InputGroup.Addon><Glyphicon glyph='glyphicon glyphicon-search'/></InputGroup.Addon>
        <Select
          options={options}
          wrapperStyle={{position:'relative', zIndex:'8'}}
          placeholder={placeholder}
          noResultsText={'Результаты не найдены'}
          onChange={onOptionClick}
          style={{borderRadius:'0 4px 4px 0', position:'relative', zIndex:'8'}}
          {...props}
        />
      </InputGroup>
    )
  }
}
export default SearchBar;
