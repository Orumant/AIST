import React from 'react'
import Notifications from 'react-notification-system-redux';
import Button from '@material-ui/core/Button';
import TestsTable from "../../../containers/ResultsPage/TestTable";
import SearchBar from "../../../containers/ResultsPage/SearchBar";
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';
import './style.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import FilterStand from "../../../containers/global/FilterStandNew";
import FilterAS from "../../global/FilterASNew";
import Loading from 'react-loading';

class Results extends React.Component {

  state = {
    showFilter: false,
    isNewPage: true,
  };

  request = {};

  componentDidMount() {
    const {fetchOrders} = this.props;
    this.setState({isNewPage: true});
    fetchOrders(this.request);
  }

  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };

  resetFilters = () => {
    this.setState({isNewPage: false});
  };


  render() {
    const {classes, fetchOrders, orders, notifications, isFetching} = this.props;
    const {showFilter, isNewPage} = this.state;

    const FilterButton = <Button onClick={this.handleClickFilter}>
      <FilterList style={{marginRight: '8px'}}/>
      Фильтры
    </Button>;

    const spinner = <div className='loading'>
      <Loading type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    return (
      <Paper
        className={classNames(classes.content, classes[`content-right`], {
          [classes.contentShift]: showFilter,
          [classes[`contentShift-right`]]: showFilter,
        })}

      >
        {isFetching? spinner: null}
        <div style={{opacity: isFetching? 0.5 : 1}}>
          <div className="table-toolbar">
            <Button onClick={this.handleClickFilter}>
              <FilterList style={{marginRight: '8px'}}/>
              Фильтры
            </Button>
          </div>
          <SearchBar
            submit={fetchOrders}
            startRequest={this.request}
            close={this.handleClickFilter}
            isOpen={showFilter}
            isNewPage={isNewPage}
            resetFilters={this.resetFilters}
            updateFilter={this.updateFilterRequest}
          />
          <Paper>
            <TestsTable orders={orders} FilterButton={FilterButton}/>
            <Notifications notifications={notifications}/>
          </Paper>
        </div>
      </Paper>
    )
  }
}
Results.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Results);
