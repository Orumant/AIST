import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuItem from "./MainMenu/MenuItem";
import Chain from '../../../assets/link.svg';
import DataDir from '../../../assets/archives.svg';
import Test from '../../../assets/puzzle.svg';
import Pattern from '../../../assets/atom.svg';
import Grafana from '../../../assets/pie-chart.svg';
import Result from '../../../assets/trophy.svg';
import Start from '../../../assets/startup.svg';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";
import './style.css';

class MainMenu extends React.Component {

  render() {
    const {classes} = this.props;

    const Items = [
      {name: "Цепочки", description: "Что-то там про цепочки", icon: Chain, link: '/chains'},
      {name: "Тесты", description: "Что-то там про цепочки", icon: Test, link: '/testbuilder'},
      {name: "Шаблоны", description: "Что-то там про цепочки", icon: Pattern, link: '/datatemplates'},
      {name: "Запуск", description: "Что-то там про цепочки", icon: Start, link: '/launcher'},
      {name: "Результаты", description: "Что-то там про цепочки", icon: Result, link: '/results'},
      {name: "Справочник", description: "Что-то там про цепочки", icon: DataDir, link: '/datadirectory'},
      {
        name: "Статистика", description: "Что-то там про цепочки", icon: Grafana,
        link: 'http://sbt-ot-289.ca.sbrf.ru:8069/dashboard/db/obshchaia-statistika'
      },
    ];

    const MiddleInd = Items.length / 2;

    return (
      <Grid item md={12} xs={12} className={classes.menuPaper}>
        <Paper className={classes.menuContent}>
          <div className={"info-row"}>
            {Items.map((item, ind) => ind < MiddleInd ? <MenuItem key={"item"+ind} {...item}/> : null)}
          </div>
          <div className={"info-row"}>
            {Items.map((item, ind) => ind > MiddleInd ? <MenuItem key={"item"+ind} {...item}/> : null)}
          </div>
        </Paper>
      </Grid>
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(MainMenu);
