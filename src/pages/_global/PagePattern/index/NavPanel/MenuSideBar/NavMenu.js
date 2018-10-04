import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";


class NavMenu extends React.Component {

  render() {

    const links = {
      launcher: {name: 'Запуск цепочек', link: '/launcher'},
      results: {name: 'Результаты запусков', link: '/results'},
      dataDirectory: {name: 'Тестовые данные', link: '/datadirectory'},
      endLaunchBlock: {name: 'divider'},
      chains: {name: 'Цепочки', link: '/chains'},
      tests: {name: 'Тесты', link: '/testbuilder'},
      createPattern: {name: 'Шаблоны', link: '/datatemplates'},
      endEntitiesBlock: {name: 'divider'},
    };

    const item = (key, name, link) =>
      <ListItem key={"menu-list-" + key} button component={Link} to={link}>
        <ListItemText primary={name}/>
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
