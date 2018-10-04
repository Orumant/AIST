import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {styles} from "./style";
import {Link} from "react-router-dom";
import withRouter from "react-router-dom/es/withRouter";

class CreateButton extends React.Component {

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  onClick = (url) => {
    const {history} = this.props;
    history.push(url);
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
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem key="create_chain_link" onClick={() => this.onClick("/chains/create")}>
          <AddIcon className={classes.accountIcon}/>
          Цепочку
        </MenuItem>
        <MenuItem key="create_test_link" onClick={() => this.onClick("/test/create")}>
          <AddIcon className={classes.accountIcon}/>
          Тест
        </MenuItem>
        <MenuItem key="create_pattern_link" onClick={() => this.onClick("/datatemplates")}>
          <AddIcon className={classes.accountIcon}/>
          Шаблон
        </MenuItem>
      </Menu>
    ];
  }
}

CreateButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(CreateButton));

