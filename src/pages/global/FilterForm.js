import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';
import {arrayToOptions} from "../../utils/filters/index";

class FilterForm extends React.Component {

  state = {
    selectedOption : null,
  };

  changeSelection = (option) => {
    const {onChange, name} = this.props;
    this.setState({selectedOption: option});
    onChange({[name]: option.label});
  };

  render ()  {
    const {selectedOption} = this.state;
    const {options, placeholder} = this.props;
    const optionsList = arrayToOptions(options);

    return (
      <Select
        options={optionsList}
        className='test-filter'
        placeholder={placeholder? placeholder: ""}
        onChange={this.changeSelection}
        value={selectedOption}
      />
    )
  }
}

FilterForm.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FilterForm

