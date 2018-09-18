import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";


class CommonInfo extends React.Component {

  render() {
    const {classes, data} = this.props;
    const {name, marker, groups} = data;

    const field = (label, val) => <div style={{margin: '24px'}}>
      <Typography variant="subheading">{label}:</Typography>
      <Typography variant="subheading" color="primary">{val}</Typography>
    </div>;

    return (
      <Grid item xs={12} md={12} key="confirmation-common-data-block">
        <Typography variant="title" className={classes.gridTitle}>Общая информация</Typography>
        <div style={{display: "flex"}}>
          {field("Название", name)}
          {field("Маркер", marker? marker: "Не указан")}
          {field("Группы", groups? (groups.length > 0? new Array(groups).join(", ") : "Не выбраны") : null)}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles) (CommonInfo);
