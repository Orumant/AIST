import React from 'react';
import MainHelp from "./help";
import MainMenu from "./index/MainMenu";
import NavPanel from "./index/MainMenu/NavPanel";
import Grid from "@material-ui/core/Grid/Grid";
import MainTitle from "./index/MainTitle";

class MainPage extends React.Component {

  render() {
    return (
      <div className="image-background" style={{minHeight: '100vh'}}>
        <NavPanel help={<MainHelp/>} />
        <Grid container>
          <MainTitle/>
          <MainMenu/>
        </Grid>
      </div>
    );
  }
}

export default MainPage;
