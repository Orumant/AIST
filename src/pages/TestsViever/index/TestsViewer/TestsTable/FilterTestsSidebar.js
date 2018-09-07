import React, {Component} from 'react';
import Drawer from "@material-ui/core/es/Drawer/Drawer";
import {styles} from '../../../../_global/style.js';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';


class FilterTestsSidebar extends Component {

  render() {
    const {drawerProps, classes, children} = this.props;
    return (
      <Drawer {...drawerProps}
              anchor={'right'}
              variant={"persistent"}
              classes={{paper: classes.drawerPaper}}>
        <div style={{marginTop: 64, width: 350}} className={classes.drawerHeader}>
          <Typography className={classes.drawerTitle} variant={"title"}>Фильтры</Typography>
          <IconButton onClick={drawerProps.onClose}>
            <CloseIcon/>
          </IconButton>
        </div>
        {children && children}
      </Drawer>
    );
  }


}

export default withStyles(styles, {withTheme: true})(FilterTestsSidebar);
