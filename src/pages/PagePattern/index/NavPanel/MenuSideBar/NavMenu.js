import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";
import '../../../style.css'


class NavMenu extends React.Component {

  state = {
    expand: false,
  };

  handleClick = () => {
    this.setState(state => ({expand: !state.expand}));
  };

  render() {
    const {expand} = this.state;

    const links = {
      chains: { name: 'Реестр цепочек', link: '/chaineditor'},
      tests: { name: 'Реестр тестов', link: '/testbuilder'},
      results: { name: 'Реестр запусков', link: '/results'},
      dataDirectory: { name: 'Справочник данных', link: '/datadirectory'},
      launcher: { name: 'Запуск цепочек', link: '/launcher'},
    };

    const entities = {
      chain: { name: 'Цепочку', link: '/chaineditor'},
      test: { name: 'Тест', link: '/testbuilder'},
    };

    const item = (name, link) =>
      <ListItem button component={Link} to={link}>
        <ListItemText primary={name}/>
      </ListItem>;

    return (
      <List style={{marginTop: '64px'}}>
        {/*<ListItem button onClick={this.handleClick}>*/}
          {/*<ListItemText primary={"Создать..."}/>*/}
          {/*{expand? <ExpandLess/> : <ExpandMore/>}*/}
        {/*</ListItem>*/}
        {/*<Collapse in={expand} timeout="auto" unmountOnExit>*/}
          {/*<List>*/}
            {/*{Object.keys(entities).map(elem =>*/}
              {/*<div style={{paddingLeft: '16px'}}>*/}
                {/*{item(entities[elem].name, entities[elem].link)}*/}
              {/*</div>)}*/}
          {/*</List>*/}
        {/*</Collapse>*/}
        {/*<Divider />*/}

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
