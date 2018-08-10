import React from 'react'
import Select from 'react-select'
import {arrayToOptions, filterPropertyFromObjects} from "../../utils/filters/index";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";

class FilterSidebar extends React.Component {

  state = {
    values : {},
  };

  changeValue = (filterName) => (val) => {
    const {updateFilterRequest} = this.props;
    console.log(filterName, val);
    this.setState({values: {[filterName]: val}});
    updateFilterRequest(shift(values))
  };



  render ()  {
    const item = (label, elem) => <div className={'filter-item'}>{label}{elem}</div>;
    const {classes, isOpen, close, content, request} = this.props;
    console.log(request)

    const SubmitButton = <Button color="primary" onClick={() => this.props.submit()}>Отфильтровать</Button>;
    const CancelButton = <Button>Сбросить</Button>;

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
            {content.map(filter => {
              console.log(filter)
              const form = React.cloneElement(filter.form, {onChange: this.changeValue(filter.name)})
              return item(filter.label, form)})}
            <br/>
            {SubmitButton}
            {CancelButton}
            {/*{item("Название цепочки", <FilterChains chains={chains} {...others}/>)}*/}
            {/*{item("Дата", <DateForm {...others}/>)}*/}
            {/*{item("Система", <FilterAS  key={'system-filter'} tests={tests} {...others}/>)}*/}
            {/*{item("Контур", <FilterStand  key={'stand-filter'} tests={tests} {...others}/>)}*/}
            {/*{item("Теги", <FilterTag key={'tag-filter'} tests={tests} {...others}/>)}*/}
          </div>
        </div>
      </Drawer>
    )
  }
}

FilterSidebar.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(FilterSidebar);


