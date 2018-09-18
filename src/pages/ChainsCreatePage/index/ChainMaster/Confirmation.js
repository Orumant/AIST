import React from 'react';
import PageNavigation from "./PageNavigation";
import CommonInfo from "./Confirmation/CommonInfo";
import TestInfo from "./Confirmation/TestInfo";
import FormInfo from "./Confirmation/FormInfo";

import Grid from "@material-ui/core/Grid";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";

class Confirmation extends React.Component {

  render() {
    const {classes, data, testsAll, ...handleNavigation} = this.props;

    return [
      <Paper className={classes.stepContent} key="chains-master-confirmation-page">
        <Grid container>
          <CommonInfo data={data}/>
          <TestInfo data={data} testsAll={testsAll}/>
          <FormInfo data={data}/>
        </Grid>
      </Paper>,
      <PageNavigation key="navigation-common-data" chain_data={data} {...handleNavigation}/>
    ]
  }
}

export default withStyles(styles)(Confirmation);
