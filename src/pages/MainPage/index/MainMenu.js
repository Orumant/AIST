import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MenuItem from "./MainMenu/MenuItem";
import Chain from '../../../assets/link.svg';
import DataDir from '../../../assets/archives.svg';
import Test from '../../../assets/puzzle.svg';
import Template from '../../../assets/atom.svg';
import Grafana from '../../../assets/pie-chart.svg';
import Result from '../../../assets/trophy.svg';
import Start from '../../../assets/startup.svg';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";
import './style.css';
import Descriptions from "./MainMenu/Descriptions";
import {BACKEND_URL} from "../../../constants/endpoints";

class MainMenu extends React.Component {

  render() {
    const {classes} = this.props;

    const Items = [
      {name: "Тесты", description: Descriptions.tests, icon: Test, link: '/tests'},
      {name: "Цепочки", description: Descriptions.chains, icon: Chain, link: '/chains'},
      {name: "Шаблоны", description: Descriptions.template, icon: Template, link: '/datatemplates'},
      {name: "Запуск цепочек", description: Descriptions.start, icon: Start, link: '/launcher'},
      {name: "Результаты запусков", description: Descriptions.results, icon: Result, link: '/results'},
      {name: "Тестовые данные", description: Descriptions.datadirectory, icon: DataDir, link: '/datadirectory'},
      {
        name: "Портал метрик", description: Descriptions.grafana, icon: Grafana,
        link: `${BACKEND_URL}/metrics/dashboard/db/obshchaia-statistika?orgId=1`
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
