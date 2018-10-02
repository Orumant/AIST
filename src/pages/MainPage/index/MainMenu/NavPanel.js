import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import UserActions from "../../../_global/PagePattern/index/NavPanel/UserActions";
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";


class NavPanel extends React.Component {

  render() {
    const { classes, help } = this.props;

    return (
      <AppBar className={classes.appBar}>
        <Toolbar  className={classes.toolBar}>
          <div className={classes.flex}/>
          <UserActions helpForm={help}/>
        </Toolbar>
      </AppBar>
    );
  }
}

NavPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavPanel);
