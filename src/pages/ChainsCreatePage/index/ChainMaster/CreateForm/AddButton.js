import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import AddIcon from '@material-ui/icons/Add';


class AddButton extends React.Component {

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  render() {
    const { addField } = this.props;
    const { anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return [
      <Button
        key="add-btn"
        aria-owns='menu-create-btn'
        aria-haspopup="true"
        onClick={this.handleMenu}
        color="secondary"
      >
        Добавить поле
        <AddIcon/>
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
        <MenuItem key="text-option" onClick={() => addField("Input")}>Текстовое поле</MenuItem>
        <MenuItem key="date-option" onClick={() => addField("Date")}>Дата</MenuItem>
        <MenuItem key="dropdown-option" onClick={() => addField("DropDown")}>Выпадающее меню</MenuItem>
      </Menu>
    ];
  }
}

AddButton.propTypes = {
  addField: PropTypes.func,
};

export default AddButton;
