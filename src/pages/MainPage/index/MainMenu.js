import React from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/es/Grid/Grid";
import Trianglify from '../../../assets/trianglify.svg';
import TrianglifyNew from '../../../assets/trianglify_new.svg';
import TrianglifyFull from '../../../assets/trianglify_full.svg';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chain from '../../../assets/link.svg';
import DataDir from '../../../assets/archives.svg';
import Test from '../../../assets/puzzle.svg';
import Pattern from '../../../assets/atom.svg';
import Grafana from '../../../assets/pie-chart.svg';
import Result from '../../../assets/trophy.svg';
import Start from '../../../assets/startup.svg';
import './style.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import UserActions from "../../_global/PagePattern/index/NavPanel/UserActions";


class MainMenu extends React.Component {


  render() {

    return (
      <div  style={{backgroundColor: "#ece7f2", height: '100%', backgroundImage: `url(${TrianglifyFull})`, backgroundSize: 'cover'}}>
      <Grid container>
        <Grid item md={12} xs={12} >
          {console.log(Trianglify)}
          <div style={{display: 'flex', alignItems: 'center', height: '60vh', paddingBottom: '20%'}}>
            <div style={{width: '100%', textAlign: 'center'}}>
            <Typography variant='headline' style={{color: '#fff', fontSize: '4.2rem', fontWeight: '600'}}>АИСТ 3.0</Typography>
            <Typography variant='subheading' style={{color: '#fff', fontSize: '1.3rem', fontWeight: '500'}}>Автоматизированная Интеграционная Система Тестирования</Typography>
            </div>
            {/*<img width="100%" style={{maxHeight: "450px"}} alt="Logo" src={Trianglify}/>*/}
          </div>
          <Paper style={{ height: "700px", margin: '-20% 100px 0px', position: 'relative', backgroundColor: "#fff", padding: "70px 0px"}}>
            <div className={"info-row"}>
                    <div className={"item-card"}>
                      <img style={{maxHeight: "100px"}} alt="Chains" src={Chain}/>
                        <CardContent>
                          <Typography variant='title'>Цепочки</Typography>
                          <Typography className={"info"}>Что-то там про цепочки</Typography>
                        </CardContent>
                    </div>
                    <div className={"item-card"}>
                      <img style={{maxHeight: "100px"}} alt="Test" src={Test}/>
                      <CardContent>
                        <Typography variant='title'>Тесты</Typography>
                        <Typography className={"info"}>Что-то там про тесты</Typography>
                      </CardContent>
                    </div>
                    <div className={"item-card"}>
                      <img style={{maxHeight: "100px"}} alt="Template" src={Pattern}/>
                      <CardContent>
                        <Typography variant='title'>Шаблоны</Typography>
                        <Typography className={"info"}>Что-то там про цепочки</Typography>
                      </CardContent>
                    </div>
                    <div className={"item-card"}>
                      <img style={{maxHeight: "100px"}} alt="DataDir" src={Start}/>
                      <CardContent>
                        <Typography variant='title'>Запуск</Typography>
                        <Typography className={"info"}>Что-то там про цепочки</Typography>
                      </CardContent>
                    </div>
            </div>
              <div className={"info-row"}>
                <div className={"item-card"}>
                  <img style={{maxHeight: "100px"}} alt="DataDir" src={Result}/>
                  <CardContent>
                    <Typography variant='title'>Результаты</Typography>
                    <Typography className={"info"}>Что-то там про цепочки</Typography>
                  </CardContent>
                </div>
                <div className={"item-card"}>
                  <img style={{maxHeight: "100px"}} alt="DataDir" src={DataDir}/>
                  <CardContent>
                    <Typography variant='title'>Справочник</Typography>
                    <Typography className={"info"}>Что-то там про цепочки</Typography>
                  </CardContent>
                </div>
                <div className={"item-card"}>
                  <img style={{maxHeight: "100px"}} alt="DataDir" src={Grafana}/>
                  <CardContent>
                    <Typography variant='title'>Статистика</Typography>
                    <Typography className={"info"}>Что-то там про цепочки</Typography>
                  </CardContent>
                </div>
            </div>
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
