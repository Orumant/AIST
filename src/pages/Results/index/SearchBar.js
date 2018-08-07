import React from 'react';
import DateForm from "../../global/DateForm";
import FilterForm from "../../../containers/global/FilterForm";
import FilterAS from "../../global/FilterAS";
import FilterStand from "../../../containers/global/FilterStand";
import FilterTag from "../../global/FilterTag";
import FilterChains from "../../global/FilterChains";
import Divider from '@material-ui/core/Divider';

import HeaderTitle from "./SearchBar/HeaderTitle";
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";

import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';



class SearchBar extends React.Component {

  componentDidMount() {
    this.props.fetchChainsTests();
  }

  render () {
    const {classes, tests, chains, isOpen, close,  ...others} = this.props;
    const options=[
      {name: 'as', label: 'АС', request_tag: 'asystems', form: <FilterAS  key={'system-filter'} tests={tests} {...others}/>},
      {name: 'stand', label: 'Контуру', request_tag: 'stand',form: <FilterStand  key={'stand-filter'} tests={tests} {...others}/>},
      {name: 'tags', label: 'Тегам', request_tag: 'tags', form: <FilterTag key={'tag-filter'} tests={tests} {...others}/>},
    ];
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
            <IconButton onClick={close}>
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="title">
              Фильтры
            </Typography>
          </div>
          {/*<HeaderTitle/>*/}
          <Divider />
          <FilterChains chains={chains} {...others}/>
          <DateForm {...others}/>
          <div className={'search-additional'}>
            <FilterForm filters={options} {...others}/>
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
