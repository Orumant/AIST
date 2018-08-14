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
    onChange({[name]: option? option.label: option});
  };

  componentDidMount() {
    const {value, options} = this.props;
    const option = {label: value, value: options.indexOf(value)}
    this.setState({selectedOption: option})
  }

  render ()  {
    const {selectedOption} = this.state;
    const {options, placeholder, label, value} = this.props;
    const optionsList = arrayToOptions(options);

    return (
      <div className={'filter-item'}>
        {label}
        <Select
          options={optionsList}
          className='test-filter'
          placeholder={placeholder? placeholder: ""}
          onChange={this.changeSelection}
          value={value? selectedOption: value}
        />
      </div>
    )
  }
}

FilterForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FilterForm

