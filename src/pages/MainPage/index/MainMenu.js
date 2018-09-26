import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/es/Grid/Grid";
import Trianglify from '../../../assets/trianglify.svg';
import Paper from "@material-ui/core/Paper";


class MainMenu extends React.Component {


  render() {

    return (
      <div>
      <Grid container>

        <Grid item md={12} xs={12}>
          <img width="100%" alt="Logo" src={Trianglify}/>
          <Paper>

          </Paper>
        </Grid>
      </Grid>
      </div>
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object,
};

export default MainMenu;
