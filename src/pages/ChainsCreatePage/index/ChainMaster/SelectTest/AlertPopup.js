import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import {styles} from "./style";
import SnackbarContent from "@material-ui/core/es/SnackbarContent/SnackbarContent";


class AlertPopup extends React.Component {

  onClosePopup = (ev, reason) => {
    const {onClose} = this.props;
    if (reason === "clickaway") return '';
    onClose();
  };

  render() {
    const {classes, isOpen} = this.props;

    return (
      <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                autoHideDuration={6000}
                open={isOpen}
                onClose={this.onClosePopup}>
        <SnackbarContent className={classes.error}
                         message={"Необходимо выбрать хотя бы один тест"}
                         action={
                           <IconButton onClick={this.onClosePopup} color="inherit">
                             <CloseIcon/>
                           </IconButton>}
        />
      </Snackbar>
    )
  }
}

AlertPopup.propTypes = {
  classes: PropTypes.object,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default withStyles(styles)(AlertPopup);

