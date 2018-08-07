import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {onUserLogOut, forceLogin, getUserName, getPersonalPage} from '../../../../../globalFunc';
import {styles} from "./style";

class AccountButton extends React.Component {

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logOut = () => {
    onUserLogOut();
    forceLogin();
    this.handleClose();
  };

  getPersonal = () => {
    getPersonalPage();
    this.handleClose();
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return [
        <Button
          aria-owns='menu-appbar'
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle  className={classes.accountIcon}/>
          <Typography color="inherit">{getUserName()}</Typography>
        </Button>,
        <Menu
          id="account-menu"
          key="account-menu"
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        >
          <MenuItem key="account_link" onClick={this.getPersonal}>Личный кабинет</MenuItem>
          <MenuItem key="logout_link" onClick={this.logOut}>Выйти</MenuItem>
        </Menu>
    ];
  }
}

AccountButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AccountButton);

