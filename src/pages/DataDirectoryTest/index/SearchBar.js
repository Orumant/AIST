import React from 'react'
import PropTypes from 'prop-types';
import DateForm from "../../global/DateForm";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";
import FilterMarker from "../../global/FilterMarker";
import FilterTag from "../../global/FilterTag";

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";

class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {classes, isOpen, close, dataLength, chains, tests, ...others} = this.props;

    const item = (name, elem) => <div className={'filter-item'}>{name}{elem}</div>;
    return (
    <Drawer
      variant="persistent"
      anchor="right"
      classes={{
        paper: classes.drawerPaper,
      }}
      open={isOpen}
      onClose={close}>
      <div className={"sidebar-content"}>
        <div className={classes.drawerHeader}>
          <Typography variant="title" className={classes.drawerTitle}>
            Фильтры
          </Typography>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </div>
        <div>
          {item("Маркер", <FilterMarker chains={chains} {...others}/>)}
          {item("Теги", <FilterTag key={'tag-filter'} tests={tests} {...others}/>)}
          {item("Дата", <DateForm {...others}/>)}
          {item("Система", <FilterAS  key={'system-filter'} tests={tests} {...others}/>)}
          {item("Контур", <FilterStand  key={'stand-filter'} tests={tests} {...others}/>)}
          <Divider/>
          <div className={'filter-item'}>Количество записей по выбранному маркеру: <b>{dataLength}</b></div>
        </div>
      </div>
    </Drawer>
    )
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchBar);
