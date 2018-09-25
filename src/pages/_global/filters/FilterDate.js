import React from 'react'
import PropTypes from 'prop-types';
import DateForm from "./base/DateForm";
import Typography from "@material-ui/core/Typography";

import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"

import './style.css'


class FilterDate extends React.Component {

  render ()  {
    const {onChange} = this.props;

    return (
      <div className={'filter-item'}>
        <Typography>Дата</Typography>
        <DateForm onChange={onChange}/>
      </div>
    )
  }
}

FilterDate.propTypes = {
  onChange: PropTypes.func,
};

export default FilterDate

