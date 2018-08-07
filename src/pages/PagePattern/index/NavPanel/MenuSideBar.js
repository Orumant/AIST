import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NavMenu from "./MenuSideBar/NavMenu";
import {styles} from "./style";


class MenuSideBar extends React.Component {

  render() {
    const {classes, open} = this.props;

    return (
      <Drawer
        variant="persistent"
        anchor={'left'}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <NavMenu />
      </Drawer>
    );
  }
}

MenuSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuSideBar);

