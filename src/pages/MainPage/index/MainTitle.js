import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from "@material-ui/core/es/Grid/Grid";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles/index";
import {styles} from "./style";


class MainTitle extends React.Component {

  render() {
    const {classes} = this.props;

    return (
          <Grid item md={12} xs={12} >
              <div className={classes.pageTitle}>
                <Typography className={classNames(classes.titleHeadline, classes.textColor)}>
                  АИСТ 3.0
                </Typography>
                <Typography className={classNames(classes.titleSubheading, classes.textColor) }>
                  Автоматизированная Интеграционная Система Тестирования
                </Typography>
              </div>
          </Grid>
    )
  }
}

MainTitle.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MainTitle);
