import React from 'react'
import PropTypes from 'prop-types';
import DateForm from "./base/DateForm";

import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import './style.css'

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

