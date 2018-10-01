import React from 'react';
import MainHelp from "./help";
import MainMenu from "./index/MainMenu";
import NavPanel from "./index/MainMenu/NavPanel";
import Grid from "@material-ui/core/es/Grid/Grid";
import MainTitle from "./index/MainTitle";

class MainPage extends React.Component {

  render() {
    return (
      <div className="image-background">
        <NavPanel help={<MainHelp/>} />
        <Grid container style={{ height: '100%'}}>
          <MainTitle/>
          <MainMenu/>
        </Grid>
      </div>
    );
  }
}

export default MainPage;
