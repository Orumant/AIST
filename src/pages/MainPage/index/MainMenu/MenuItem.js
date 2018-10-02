import React from 'react';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { withRouter } from "react-router-dom";

class MenuItem extends React.Component {

  onClick = () => {
    const {history, link, name} = this.props;
    name !== "Статистика" ?  history.push(link): window.location = link;
  };


  render() {
    const {name, description, icon} = this.props;

    return (
      <div className={"item-card"} onClick={this.onClick}>
        <img style={{maxHeight: "100px"}} alt="Chains" src={icon}/>
        <CardContent>
          <Typography variant='title'>{name}</Typography>
          <Typography className={"info"}>{description}</Typography>
        </CardContent>
      </div>

    )
  }
}


export default withRouter(MenuItem);
