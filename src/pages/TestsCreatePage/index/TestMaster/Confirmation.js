import React from 'react';
import PageNavigation from "./PageNavigation";
import CommonInfo from "./Confirmation/CommonInfo";
import JenkinsInfo from "./Confirmation/JenkinsInfo";
import TagsInfo from "./Confirmation/TagsInfo";

import Grid from "@material-ui/core/Grid";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";

class Confirmation extends React.Component {

  render() {
    const {classes, data, ...handleNavigation} = this.props;

    return [
      <Paper className={classes.stepContent}>
        <Grid key={'info-grid-container'} container>
          <CommonInfo key={'common-info'} data={data}/>
          <JenkinsInfo key={'jenkins-info'} data={data}/>
          <TagsInfo key={'tags-info'} data={data}/>
        </Grid>
      </Paper>,
      <PageNavigation key={'navigation-common-data'} test_data={data} {...handleNavigation}/>
    ]
  }
}

export default withStyles(styles)(Confirmation);
