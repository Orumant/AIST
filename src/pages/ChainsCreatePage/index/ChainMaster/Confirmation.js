import React from 'react';
import PageNavigation from "./PageNavigation";
import CommonInfo from "./Confirmation/CommonInfo";
import TestInfo from "./Confirmation/TestInfo";
import FormInfo from "./Confirmation/FormInfo";

import Grid from "@material-ui/core/Grid";

class Confirmation extends React.Component {

  render() {
    const {data, ...handleNavigation} = this.props;

    return [
      <Grid container>
        <CommonInfo data={data}/>
        <TestInfo data={data}/>
        <FormInfo data={data}/>
      </Grid>,
      <PageNavigation key="navigation-common-data" chain_data={data} {...handleNavigation}/>
    ]
  }
}

export default Confirmation;
