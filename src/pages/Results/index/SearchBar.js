import React from 'react';
import PropTypes from 'prop-types';
import DateForm from "../../global/DateForm";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";
import FilterTag from "../../global/FilterTag";
import FilterChains from "../../global/FilterChains";

import Drawer from '@material-ui/core/Drawer';
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
    const {classes, tests, chains, isOpen, close,  ...others} = this.props;

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
            {item("Название цепочки", <FilterChains chains={chains} {...others}/>)}
            {item("Дата", <DateForm {...others}/>)}
            {item("Система", <FilterAS  key={'system-filter'} tests={tests} {...others}/>)}
            {item("Контур", <FilterStand  key={'stand-filter'} tests={tests} {...others}/>)}
            {item("Теги", <FilterTag key={'tag-filter'} tests={tests} {...others}/>)}
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
