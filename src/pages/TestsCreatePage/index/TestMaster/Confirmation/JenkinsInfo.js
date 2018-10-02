import React from 'react';
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

import {withStyles} from "@material-ui/core/styles";
import {styles} from "./style";

class TestInfo extends React.Component {

  render() {
    const {classes, data} = this.props;
    const {job_trigger} = data;

    const field = (label, val) => <div style={{margin: '24px'}}>
      <Typography variant={'subheading'}>{label}:</Typography>
      <Typography variant={'subheading'} color={'primary'}>{val}</Typography>
    </div>;

    return (
      <Grid key={'jenkins-grid-info'} item xs={12} md={12} style={{padding: '24px'}}>
        <Typography variant="title" className={classes.gridTitle}>Параметры Jenkins</Typography>
        <div key={'jenkins-div-info'} style={{display: 'flex'}} className={classes.confirmForm}>
          {field('URL Job', job_trigger.job_url)}
          {job_trigger.login ? field( 'Логин Jenkins', job_trigger.login) :
            field('Авторизация', 'Авторизация по токену')}
          {job_trigger.passOrToken ? field('Пароль Jenkins', '************'): null}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(TestInfo);
