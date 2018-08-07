import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";


class NavMenu extends React.Component {

  render() {

    const links = {
      chains: { name: 'Реестр цепочек', link: '/chaineditor'},
      tests: { name: 'Реестр тестов', link: '/testbuilder'},
      results: { name: 'Реестр запусков', link: '/results'},
      dataDirectory: { name: 'Справочник данных', link: '/datadirectory'},
      launcher: { name: 'Запуск цепочек', link: '/launcher'},
    };

    const item = (name, link) =>
      <ListItem button component={Link} to={link}>
        <ListItemText primary={name}/>
      </ListItem>;

    return (
      <List>
        {Object.keys(links).map(elem => item(links[elem].name, links[elem].link)) }
        <Divider />
        <ListItem
          button component="a"
          href={'http://sbt-ot-289.ca.sbrf.ru:8069/dashboard/db/obshchaia-statistika'}
          target="_blank">
          <ListItemText primary={'Портал метрик'}/>
        </ListItem>
      </List>
    )
  }
}

export default NavMenu;
