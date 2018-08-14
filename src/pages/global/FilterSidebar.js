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
import Loading from 'react-loading';

class FilterSidebar extends React.Component {

  state = {
    isUpdated: false,
  };

  componentDidMount() {
    const {isNewPage, startRequest, getStartFilterRequest, resetFilters} = this.props;
    if (isNewPage) {
      getStartFilterRequest(startRequest);
      resetFilters();
    }
    this.setState({isUpdated: true});
  };

  changeValue = (val) => {
    const {updateFilterRequest} = this.props;
    this.setState({values: val});
    updateFilterRequest(val)
  };

  resetFilters = () => {
    const {getStartFilterRequest, startRequest, submit} = this.props;
    getStartFilterRequest(startRequest);
    submit(startRequest);
  };

  render ()  {
    const {classes, isOpen, content, request, submit, close, updateFilterRequest} = this.props;

    const SubmitButton = <Button color="primary" onClick={() => submit(request)}>Отфильтровать</Button>;
    const CancelButton = <Button onClick={this.resetFilters}>Сбросить</Button>;
    const sidebarContent =
        <div>
          {content.map(filter => {console.log(request[filter.props.name]); return React.cloneElement(filter, {onChange: updateFilterRequest, value: request[filter.props.name]})})}
          <br/>
          {SubmitButton}
          {CancelButton}
        </div>;


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
            {request? sidebarContent :
              <div className='chain-component-loading'>
                <Loading type='spin' color='#457A8C' height='30%' width='30%'/>
              </div>
            }
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


