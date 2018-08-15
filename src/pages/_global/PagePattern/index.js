import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import MenuSideBar from "./index/NavPanel/MenuSideBar";
import NavPanel from "./index/NavPanel"

class PagePattern extends React.Component {
  state = {
    open: false,
  };

  handleDrawerClick = () => {
    const { open } = this.state;
    if (open) this.setState({ open:  false});
    else this.setState({ open:  true});
  };

  render() {
    const { classes, title, content, help } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <NavPanel title={title} handleClick={this.handleDrawerClick} help={help}/>
          <MenuSideBar open={open}/>
          <div
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: open,
              [classes[`contentShift-left`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {content}
          </div>
        </div>
      </div>
    );
  }
}

PagePattern.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PagePattern);
