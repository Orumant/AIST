import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import {withRouter} from "react-router-dom";

class MenuItem extends React.Component {

  onClick = () => {
    const {history, link, name} = this.props;
    name !== "Портал метрик" ? history.push(link) :
      process.env.REACT_APP_DOMAIN === 'ALPHA' ? window.location = link : null;
  };


  render() {
    const {name, description, icon} = this.props;
    const isDisabled = name === "Портал метрик" && process.env.REACT_APP_DOMAIN !== 'ALPHA';
    const Item =
      <div className={"item-card"} onClick={this.onClick} style={{backgroundColor: isDisabled ? '#d3d3d3' : '#fff'}}>
        <img style={{maxHeight: "100px"}} alt="Chains" src={icon}/>
        <CardContent>
          <Typography variant='title'>{name}</Typography>
          <Typography className={"info"}>{description}</Typography>
        </CardContent>
      </div>;

    return (
      isDisabled ?
        <Tooltip title={
          <Typography style={{color: 'white'}} variant={"body2"}>
            Данный модуль не доступен в домене Сигма, пожалуйста, перейдите в домен Альфа
          </Typography>
        }>
          {Item}
        </Tooltip>
        : <div>{Item}</div>
    )
  }
}


export default withRouter(MenuItem);
