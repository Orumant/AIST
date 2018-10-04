import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./style";

class TagsInfo extends React.Component {

  render() {
    const {classes, data} = this.props;
    const {static_tags, dynamic_tags} = data;

    const field = (label, val) => <div key={label} style={{margin: '24px'}}>
      <Typography variant={'subheading'}>{label}:</Typography>
      <Typography variant={'subheading'} color={'primary'}>{val}</Typography>
    </div>;

    return (
      <Grid key={'tags-grid-info'} item xs={12} md={12} style={{padding: '24px'}}>
        <Typography variant={'title'} className={classes.gridTitle}>Теги</Typography>
        <div key={'tags-div-info'} style={{display: 'flex'}} className={classes.confirmForm}>
          {field('Статические',
            static_tags ? (static_tags.length > 0 ? new Array(static_tags).join(', ') : 'Не заданы') : null)}
          {field('Динамические',
            dynamic_tags ? (dynamic_tags.length > 0 ? new Array(dynamic_tags).join(', ') : 'Не заданы') : null)}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(TagsInfo);
