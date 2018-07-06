import React from 'react'
import moment from "moment";
import {DateRangePicker, isInclusivelyBeforeDay} from "react-dates"
import {
  Button, ButtonGroup
} from "react-bootstrap";

class DateForm extends React.Component {
  state = {
    startDate: null,
    endDate: null,
    focusedInput: null,
  }

  defineRange = (period) => {
    this.setState({startDate: moment({hour: 0, minute: 0, seconds: 0}).subtract(1, period), endDate: moment()})
  }

  InfoPan = () => (
    <ButtonGroup vertical>
      <Button onClick={() => this.setState(
        {startDate: moment({hour: 0, minute: 0, seconds: 0}),
          endDate: moment({hour: 23, minute: 59, seconds: 59})
        })}>Сегодня</Button>
      <Button onClick={() => this.defineRange('days')}>День</Button>
      <Button onClick={() => this.defineRange('week')}>Неделя</Button>
      <Button onClick={() => this.defineRange('month')}>Месяц</Button>
      <Button onClick={() => this.defineRange('year')}>Год</Button>
      <Button onClick={() => this.setState(
        {startDate: moment({year:1900, hour: 0, minute: 0, seconds: 0}),
          endDate: moment({hour: 23, minute: 59, seconds: 59})
        })}>Все время</Button>
    </ButtonGroup>
  )

  handleInput = (focus) => {
    const {focusedInput, startDate, endDate} =  this.state;
    if (focusedInput !== focus) this.setState({focusedInput: focus});
    if (!focus) {
      this.props.updateRequestAndOrders({
        end_time: {
          ">": startDate.format("YYYY:MM:DD HH:mm:SS"),
          "<": endDate.format("YYYY:MM:DD HH:mm:SS")
        }}
      , this.props.request)
    }
  }

  handleDataChange = ({startDate, endDate}) => {
    this.setState({startDate, endDate})
  }

  render () {
    moment.locale('ru')
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        startDatePlaceholderText={"Дата начала"}
        startDateId="orderStartDate"
        endDate={this.state.endDate}
        endDatePlaceholderText={"Дата окончания"}
        endDateId="orderEndDate"
        onDatesChange={({startDate, endDate}) => this.handleDataChange({startDate, endDate})}
        focusedInput={this.state.focusedInput}
        isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        onFocusChange={focusedInput => this.handleInput(focusedInput)}
        calendarInfoPosition="after"
        renderCalendarInfo={() => this.InfoPan()}
        onBlur={() => alert("this is data")}
        small
      />
    )
  }
}

export default DateForm
