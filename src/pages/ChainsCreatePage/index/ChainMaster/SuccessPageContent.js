import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import green from "@material-ui/core/colors/green";
import { withRouter } from "react-router-dom";
import './style.css'

class SuccessPageContent extends React.Component {

  state = {
    time: 3,
  };

  componentDidMount() {
    setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    this.setState({time: 3});
  };

  timer = () => {
    const {time} = this.state;
    if (time >= 1) this.setState({time: this.state.time - 1});
    if (time === 1) {console.log('auauuuuauauuaau'); this.props.history.push('/chains')}
  };

  render() {
    const {time} = this.state;

    return (
      <div className="success-page">
        <Avatar className="success-page-avatar" style={{backgroundColor: green[500]}}>
          <CheckIcon className="success-page-icon"/>
        </Avatar>
        <Typography className="success-page-title" variant={"headline"}>
          Цепочка успешно сохранена
        </Typography>
        <Typography>Вы будете автоматически перенаправлены на страницу цепочек через: {time}</Typography>
      </div>
    )
  }
}



export default withRouter(SuccessPageContent);
