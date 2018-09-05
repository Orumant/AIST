import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

class ExitDialog extends React.Component {

  render() {
    const {isOpen, close, logout} = this.props;

    return (
      <Dialog open={isOpen} onClose={close}>
        <DialogTitle>{"Выход"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Вы уверены что хотите выйти?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">Нет</Button>
          <Button onClick={logout} variant="contained" color="secondary">Да</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default ExitDialog;

