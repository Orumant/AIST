import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const actions = [
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

class SpeedDials extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { hidden, open } = this.state;

    let isTouch;
    if (typeof document !== 'undefined') {
      isTouch = 'ontouchstart' in document.documentElement;
    }

    {/*<SpeedDial*/}
      {/*ariaLabel="SpeedDial example"*/}
      {/*className={classes.speedDial}*/}
      {/*hidden={hidden}*/}
      {/*icon={<SpeedDialIcon />}*/}
      {/*onBlur={this.handleClose}*/}
      {/*onClick={this.handleClick}*/}
      {/*onClose={this.handleClose}*/}
      {/*onFocus={isTouch ? undefined : this.handleOpen}*/}
      {/*onMouseEnter={isTouch ? undefined : this.handleOpen}*/}
      {/*onMouseLeave={this.handleClose}*/}
      {/*open={open}*/}
    {/*>*/}
      {/*{actions.map(action => (*/}
        {/*<SpeedDialAction*/}
          {/*key={action.name}*/}
          {/*icon={action.icon}*/}
          {/*tooltipTitle={action.name}*/}
          {/*onClick={this.handleClick}*/}
        {/*/>*/}
      {/*))}*/}
    {/*</SpeedDial>*/}

    return (
      <Button variant={'fab'} color={'secondary'} className={classes.speedDial}>
        <AddIcon />
      </Button>

    );
  }
}

SpeedDials.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SpeedDials);
