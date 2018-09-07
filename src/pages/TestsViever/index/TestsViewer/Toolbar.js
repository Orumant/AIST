import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Tooltip from "@material-ui/core/es/Tooltip/Tooltip";
import Typography from "@material-ui/core/es/Typography/Typography";
import FilterListIcon from "@material-ui/icons/FilterList";
import withStyles from "@material-ui/core/es/styles/withStyles";
import React from "react";
import './style.css'
import Button from "@material-ui/core/es/Button/Button";


const styles = theme => ({
  tooltip: {
    backgroundColor: 'rgb(67, 136, 204)'
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

export default withStyles(styles)(function ({...props}) {
  return (
    <Toolbar classes={{root: props.classes.root}}>
      <Tooltip title={<Typography style={{color: 'white'}} variant={"body2"}>Фильтры</Typography>}
               placement={"left"}
               classes={{tooltip: props.classes.tooltip}}>
        <Button onClick={props.onClick}>
          <FilterListIcon/>
          Фильтры
        </Button>
      </Tooltip>
    </Toolbar>
  );
})
