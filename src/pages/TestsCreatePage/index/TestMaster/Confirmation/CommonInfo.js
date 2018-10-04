import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./style";


class CommonInfo extends React.Component {

  render() {
    const {classes, data} = this.props;
    const {test_name, a_system, stands} = data;

    const field = (label, val) => <div key={label} style={{margin: '24px'}}>
      <Typography variant={'subheading'}>{label}:</Typography>
      <Typography variant={'subheading'} color={'primary'}>{val}</Typography>
    </div>;

    return (
      <Grid key={'common-grid-info'} item xs={12} md={12} style={{padding: '24px'}}>
        <Typography variant={'title'} className={classes.gridTitle}>Общая информация</Typography>
        <div key={'common-div-info'} className={classes.confirmForm} style={{display: 'flex'}}>
          {field('Название', test_name)}
          {field('АС', a_system)}
          {field('Контур', stands ? (stands.length > 0 ? new Array(stands).join(', ') : 'Не выбраны') : null)}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(CommonInfo);
