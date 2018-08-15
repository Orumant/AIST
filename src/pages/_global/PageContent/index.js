import React from 'react'


import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from 'react-loading';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';


import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import "./style.css"




class PageContent extends React.Component{

  state = {
    isNewPage: true,
    showFilter: false,
  };

  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };

  changePageFlag = () => {
    this.setState({isNewPage: false});
  };

  render() {

    const {classes, isFilter, isLoading, FilterBar, content} = this.props;
    const {isNewPage, showFilter} = this.state;

    const Sidebar = React.cloneElement(FilterBar, {
      close: this.handleClickFilter,
      isOpen: showFilter,
      isNewPage: isNewPage,
      changePageFlag: this.changePageFlag});

    const Spinner = <div className='loading'>
      <Loading key='page-content-loading' type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    return (
      <Paper
        className={classNames(classes.content, classes[`content-right`], {
          [classes.contentShift]: showFilter,
          [classes[`contentShift-right`]]: showFilter,
        })}
      >
        {isLoading? Spinner: null}
        <div style={{opacity: isLoading? 0.5 : 1}}>
          {isFilter? <div className="table-toolbar">
            <Button onClick={this.handleClickFilter}>
              <FilterList style={{marginRight: '8px'}}/>
              Фильтры
            </Button>
          </div>: null}
          {showFilter? Sidebar : null}
          <Paper>
            {content}
          </Paper>
        </div>
      </Paper>
    )
  }
}

PageContent.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  isFilter: PropTypes.bool,
  FilterBar: PropTypes.element,
  content: PropTypes.array,
};

export default withStyles(styles, { withTheme: true })(PageContent);
