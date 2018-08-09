import React from 'react'
import "moment/locale/ru"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import Notifications from 'react-notification-system-redux';

import SearchBar from "../../containers/DataDirectoryTest/SearchBar";
import ArchiveCatalogTabs from "./index/ArchiveCatalogTabs";
import "./style.css"

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";


class DataDirectoryTest extends React.Component{

  state = {
    showFilter: false,
  };


  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };

  componentDidMount() {
    const {request, updateRequestAndOrders} = this.props;
    updateRequestAndOrders({locked: false, status: "SUCCESS"}, request);
  }

  render() {

    const {classes, orders, request, fetchOrders, updateRequestAndOrders, lockOrder, unlockOrder, notifications} = this.props;
    const {showFilter} = this.state;
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
        {showFilter? <SearchBar onChange={fetchOrders}
                                dataLength={orders.length}
                                request={request}
                                updateRequestAndOrders={updateRequestAndOrders}
                                close={this.handleClickFilter}
                                isOpen={showFilter}
        /> : null}
        <Paper>
      {/*<div style={{height: '100%'}}>*/}
        {/*<SearchBar onChange={fetchOrders}*/}
                   {/*dataLength={orders.length}*/}
                   {/*request={request}*/}
                   {/*updateRequestAndOrders={updateRequestAndOrders}/>*/}
        <ArchiveCatalogTabs data={orders} request={request} lockOrder={lockOrder} unlockOrder={unlockOrder}  updateRequestAndOrders={updateRequestAndOrders}/>
        <Notifications notifications={notifications}/>
        </Paper>
      </Paper>
      // </div>
    )
  }
}

DataDirectoryTest.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DataDirectoryTest);
