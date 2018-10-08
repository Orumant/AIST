import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactMail from '@material-ui/icons/ContactMail';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";


class NavMenu extends React.Component {

  render() {

    const links = {

      chains: { name: 'Цепочки', link: '/chains'},
      tests: { name: 'Тесты', link: '/testbuilder'},
      results: { name: 'Результаты', link: '/results'},
      dataDirectory: { name: 'Справочник данных', link: '/datadirectory'},
      launcher: { name: 'Запуск цепочек', link: '/launcher'},
      createPattern: { name: 'Создание шаблона', link: '/datatemplates'},
      viewTests: { name: 'Реестр тестов', link: '/tests'},
    };

    const item = (key, name, link) =>
      <ListItem key={'menu-list-' + key} button component={Link} to={link}>
        <ListItemText primary={name}/>
      </ListItem>;

    return [
      <List key={'nav-menu-list'} style={{marginTop: '64px'}}>
        {Object.keys(links).map(elem => item(elem, links[elem].name, links[elem].link)) }
        <Divider />
        <ListItem
          key={'menu-list-metrika'}
          button component={'a'}
          href={'http://sbt-ot-289.ca.sbrf.ru:8069/dashboard/db/obshchaia-statistika'}
          target={'_blank'}>
          <ListItemText primary={'Портал метрик'}/>
        </ListItem>
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
    ]
  }
}

export default NavMenu;
