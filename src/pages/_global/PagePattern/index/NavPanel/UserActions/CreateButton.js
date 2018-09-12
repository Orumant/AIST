import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {styles} from "./style";
import {Link} from "react-router-dom";

class CreateButton extends React.Component {

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {classes} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return [
      <Button
        key="create-btn"
        aria-owns='menu-create-btn'
        aria-haspopup="true"
        onClick={this.handleMenu}
        color="inherit"
        className={classes.createButton}
      >
        <ExpandMoreIcon className={classes.accountIcon}/>
        <Typography color="inherit">Создать</Typography>
      </Button>,
      <Menu
        id="create-menu"
        key="create-menu"
        open={open}
        onClose={this.handleClose}
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem key="create_chain_link"><Link to={"/chains/create"}>Цепочку</Link></MenuItem>
        <MenuItem key="create_test_link"><Link to={"/testbuilder"}>Тест</Link></MenuItem>
      </Menu>
    ];
  }
}

CreateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CreateButton);

