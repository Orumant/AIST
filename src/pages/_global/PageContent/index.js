import React from 'react'


import PropTypes from 'prop-types';
import classNames from 'classnames';
import Loading from 'react-loading';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';

import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";
import "./style.css"
import Typography from "@material-ui/core/Typography";

class PageContent extends React.Component {

  state = {
    showFilter: false,
  };

  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };


  render() {

    const {classes, isFilter, isLoading, FilterBar, content, pageName, selectedNum, error, tools} = this.props;
    const {showFilter} = this.state;

    const Sidebar = isFilter ? React.cloneElement(FilterBar, {
      close: this.handleClickFilter,
      isOpen: showFilter
    }) : null;

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
        {isLoading ? Spinner : null}
        <div style={{opacity: isLoading ? 0.5 : 1}}>
          {isFilter ?
            <div className={classNames("table-toolbar", {[classes.highlight]: error})}>
              <div className="table-name">
                {error ?
                  <Typography color="inherit" variant="headline">{error}</Typography> :
                  <div>
                    <Typography color="inherit" variant="headline">{pageName}</Typography>
                    {selectedNum ? <Typography color="inherit">
                      Выбрано: {selectedNum}
                    </Typography> : null}
                  </div>}
              </div>
              <div className="tools">
                {tools}
                <Button onClick={this.handleClickFilter}>
                  <FilterList style={{marginRight: '8px'}}/>
                  Фильтры
                </Button>
              </div>
            </div> : null}
          {Sidebar}
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
  pageName: PropTypes.string,
};

export default withStyles(styles, {withTheme: true})(PageContent);
