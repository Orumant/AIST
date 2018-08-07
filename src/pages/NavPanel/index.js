import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {styles} from "./style";

class NavPanel extends React.Component {

  render() {
    const { classes, title, handleClick} = this.props;
    console.log('sdfsdf')

    return (
          <AppBar
            className={classNames(classes.appBar)}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleClick}
                className={classNames(classes.menuButton)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                {title}
              </Typography>
              <div>
                <IconButton
                  aria-owns='menu-appbar'
                  aria-haspopup="true"

                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
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
