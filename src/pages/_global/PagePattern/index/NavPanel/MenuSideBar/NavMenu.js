import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ContactMail from '@material-ui/icons/ContactMail';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from "react-router-dom";
import {BACKEND_URL} from "../../../../../../constants/endpoints";

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
          key={'menu-list-metrika'}
          button component={'a'}
          href={`${BACKEND_URL}/metrics/dashboard/db/obshchaia-statistika?orgId=1`}
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
    )
  }
}

export default NavMenu;
