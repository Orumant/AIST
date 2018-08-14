import React from 'react'
import Notifications from 'react-notification-system-redux';
import Button from '@material-ui/core/Button';
import TestsTable from "../../../containers/Results/TestTable";
import SearchBar from "../../../containers/Results/SearchBar";
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';
import './style.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import FilterSidebar from '../../../containers/global/FilterSidebar'
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
    const {updateRequestAndOrders, fetchChainsTests} = this.props;
    this.setState({isNewPage: true});
    updateRequestAndOrders({}, this.request);
    fetchChainsTests();
  }

  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };

  resetFilters = () => {
    this.setState({isNewPage: false});
  };


  render() {
    const {classes, fetchOrders, orders, notifications, tests, isFetching} = this.props;
    const {showFilter, isNewPage} = this.state;

    const FilterButton = <Button onClick={this.handleClickFilter}>
      <FilterList style={{marginRight: '8px'}}/>
      Фильтры
    </Button>;

    const spinner = <div className='chain-component-loading'>
      <Loading type='spin' color='#457A8C' height='30%' width='30%'/>
    </div>

    const content = [
      <FilterStand name='stand' key={'stand-filter'}/>,
      <FilterAS name='asystems' key={'system-filter'} tests={tests}/>
    ];

    return (
      <Paper
        className={classNames(classes.content, classes[`content-right`], {
          [classes.contentShift]: showFilter,
          [classes[`contentShift-right`]]: showFilter,
        })}
      >
        <div className="table-toolbar">
          <Button onClick={this.handleClickFilter}>
            <FilterList style={{marginRight: '8px'}}/>
            Фильтры
          </Button>
        </div>
        {showFilter?
 //         <SearchBar onChange={fetchOrders}
 //                               dataLength={orders.length}
 //                               request={request}
 //                               updateRequestAndOrders={updateRequestAndOrders}
 //                               close={this.handleClickFilter}
 //                               isOpen={showFilter}
 //       />
        <FilterSidebar
          submit={fetchOrders}
          startRequest={this.request}
          content={content}
          close={this.handleClickFilter}
          isOpen={showFilter}
          isNewPage={isNewPage}
          resetFilters={this.resetFilters}
          updateFilter={this.updateFilterRequest}
        />
          : null}
        <Paper>
          <TestsTable orders={orders} FilterButton={FilterButton}/>
          <Notifications notifications={notifications}/>
        </Paper>
      </Paper>
    )
  }
}
Results.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Results);
