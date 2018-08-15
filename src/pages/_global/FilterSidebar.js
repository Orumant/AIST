import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import './style.css'


class FilterSidebar extends React.Component {

  componentDidMount() {
    const {isNewPage, startRequest, getStartFilterRequest, changePageFlag} = this.props;
    if (isNewPage) {
      getStartFilterRequest(startRequest);
      changePageFlag();
    }
  };

  resetFilters = () => {
    const {getStartFilterRequest, startRequest, submit} = this.props;
    getStartFilterRequest(startRequest);
    submit(startRequest);
  };

  render ()  {
    const {classes, isOpen, content, request, submit, close, updateFilterRequest, dataLength} = this.props;

    const SubmitButton = <Button color="primary" onClick={() => submit(request)}>Отфильтровать</Button>;
    const CancelButton = <Button onClick={this.resetFilters}>Сбросить</Button>;
    const sidebarContent =
        <div>
          {content.map(filter => React.cloneElement(filter, {onChange: updateFilterRequest, value: request[filter.props.name]}))}
          <br/>
          {SubmitButton}
          {CancelButton}
        </div>;

    const resultsLength = [<Divider/>, <div className={'results-length'}>Найдено записей: <b>{dataLength}</b></div>];

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
            {sidebarContent}
            {dataLength !== undefined ? resultsLength: null}
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


