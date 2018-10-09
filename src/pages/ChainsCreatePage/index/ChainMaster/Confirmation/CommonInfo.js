import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./style";


class CommonInfo extends React.Component {

  getCommonStands = () => {
    const {data} = this.props;
    const {tests} = data;
    let uniqueStands = [];
    tests.map((test) => test ? test.stands.map(
      (stand) => uniqueStands.indexOf(stand) === -1 ? uniqueStands.push(stand) : null
    ) : null);
    return uniqueStands.filter((stand) => tests.every((test) => test ? test.stands.indexOf(stand) !== -1 : false));
  };

  render() {
    const {classes, data} = this.props;
    const {name, marker, groups, templates} = data;
    const stands = this.getCommonStands();


    const field = (label, val) => <div style={{margin: '24px'}}>
      <Typography variant="subheading">{label}:</Typography>
      <Typography variant="subheading" className={classes.dataVal}>{val}</Typography>
    </div>;

    return (
      <Grid item xs={12} md={12} key="confirmation-common-data-block">
        <Typography variant="title" className={classes.gridTitle}>Общая информация</Typography>
        <div style={{display: 'flex'}}>
          <div style={{flexBasis: '50%'}}>
            {field("Название", name)}
            {field("Маркер", marker ? marker : "Не указан")}
            {field("Контуры", stands ?(stands.length > 0 ? new Array(stands).join(", ") : "Общих контуров нет") : null)}
          </div>
          <div style={{flexBasis: '50%'}}>
            {field("Группы", groups ? (groups.length > 0 ? new Array(groups).join(", ") : "Не выбраны") : null)}
            {field("Шаблоны", templates ? (templates.length > 0 ? new Array(templates).join(", ") : "Не выбраны") : null)}
          </div>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles, {withTheme: true})(CommonInfo);
