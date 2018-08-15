import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';
import {arrayToOptions} from "../../utils/filters/index";
import DateForm from "./DateForm";

class FilterDate extends React.Component {

  render ()  {
    const {onChange} = this.props;

    return (
      <div className={'filter-item'}>
        Дата
        <DateForm onChange={onChange}/>
      </div>
    )
  }
}

FilterDate.propTypes = {
  onChange: PropTypes.func,
};

export default FilterDate

