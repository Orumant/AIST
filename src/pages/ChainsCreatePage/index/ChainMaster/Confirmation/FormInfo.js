import React from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import blue from '@material-ui/core/colors/blue'
import green from '@material-ui/core/colors/green'
import indigo from '@material-ui/core/colors/indigo'

import {withStyles} from "@material-ui/core/styles";
import {styles} from "./style";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";

class TestInfo extends React.Component {

  render() {
    const {classes, data} = this.props;
    const {form} = data;

    const typeAbbr = {
      Input: "Т",
      Date: "Д",
      DropDown: "В",
    };

    const typeNames = {
      Input: "Текстовове поле",
      Date: "Дата",
      DropDown: "Выпадающее меню",
    };

    const colors = {Input: blue[700], Date: green[700], DropDown: indigo[700]};

    const formContent = (field) => {
      if (field.regEx) return field.regEx;
      if (field.dropDownOptions) return new Array(field.dropDownOptions).join(", ");
      return "";
    };

    return (
      <Grid item xs={12} md={6}>
        <Typography variant="title" className={classes.gridTitle}>Форма</Typography>
        <List>
          {form && form.length > 0 ?
            form.map((field) => <ListItem>
              <ListItemAvatar>
                <Tooltip title={typeNames[field.type]} placement="left">
                  <Avatar style={{backgroundColor: colors[field.type]}}>
                    {typeAbbr[field.type]}
                  </Avatar>
                </Tooltip>
              </ListItemAvatar>
              <ListItemText primary={`${field.label}(${field.paramName})`} secondary={formContent(field)}/>
            </ListItem>) :
            "Поля не указаны"}
        </List>
      </Grid>
    )
  }
}

export default withStyles(styles)(TestInfo);
