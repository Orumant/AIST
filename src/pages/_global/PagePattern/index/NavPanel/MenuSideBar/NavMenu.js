import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactMail from '@material-ui/icons/ContactMail';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

class NavMenu extends React.Component {

  render() {

    const links = {
      launcher: {name: 'Запуск цепочек', link: '/launcher'},
      results: {name: 'Результаты запусков', link: '/results'},
      dataDirectory: {name: 'Тестовые данные', link: '/datadirectory'},
      endLaunchBlock: {name: 'divider'},
      chains: {name: 'Цепочки', link: '/chains'},
      tests: {name: 'Тесты', link: '/tests'},
      createPattern: {name: 'Шаблоны', link: '/datatemplates'},
      endEntitiesBlock: {name: 'divider'},
    };

    const item = (key, name, link) =>
      <ListItem key={'menu-list-' + key} button component={Link} to={link}>
        <ListItemText primary={name}/>
      </ListItem>;

    const isDisabled = process.env.REACT_APP_DOMAIN !== 'ALPHA';

    const GrafanaLink =
      <ListItem
        key={'menu-list-metrika'}
        style={{pointerEvents: 'all'}}
        disabled={isDisabled}
        button component={'a'}
        href={isDisabled ? null : 'http://sbt-ot-289.ca.sbrf.ru:8069/dashboard/db/obshchaia-statistika'}
        target={'_blank'}>
        <ListItemText primary={'Портал метрик'}/>
      </ListItem>;

    return (
      <List style={{marginTop: '64px'}}>
        {Object.keys(links).map(elem => {
          if (links[elem].name === 'divider') {
            return <Divider key={`Section-${elem}`}/>;
          } else {
            return item(elem, links[elem].name, links[elem].link)
          }
        })}
        {isDisabled ?
          <Tooltip title={
            <Typography style={{color: 'white'}} variant={"body2"}>
            Данный модуль не доступен в домене Сигма, пожалуйста, перейдите в домен Альфа
          </Typography>
          }
                   placement={'right'}>
            {GrafanaLink}
          </Tooltip>
          : GrafanaLink}
        <ListItem
          key={'menu-list-sd'}
          button component={'a'}
          href={'https://confluence.ca.sbrf.ru/pages/viewpage.action?pageId=726731773'}
          target={'_blank'}>
          <ListItemText primary={'Служба поддержки'}/>
          <ListItemIcon>
            <ContactMail/>
          </ListItemIcon>
        </ListItem>
      </List>
    )
  }
}

export default NavMenu;
