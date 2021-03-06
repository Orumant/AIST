import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import {styles} from "./style";
import UserActions from "./NavPanel/UserActions";

class NavPanel extends React.Component {

  render() {
    const { classes, title, handleClick, help} = this.props;

    return (
          <AppBar className={classNames(classes.appBar, "image-background")}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                className={classNames(classes.homeButton)}
                onClick={()=> window.location.hash = '#/main'}
              >
                <HomeIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {title}
              </Typography>
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
