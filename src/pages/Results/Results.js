import React from 'react'
import Notifications from 'react-notification-system-redux';
import Button from '@material-ui/core/Button';
import TestsTable from "../../containers/Results/TestTable";
import SearchBar from "../../containers/Results/SearchBar";
import Paper from '@material-ui/core/Paper';
import FilterList from '@material-ui/icons/FilterList';
import './style.css'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import FilterSidebar from '../../containers/global/FilterSidebar'
import FilterStand from "../../containers/global/FilterStandNew";

class Results extends React.Component {

  state = {
    showFilter: false,
  };

  componentDidMount() {
    const {updateRequestAndOrders, request} = this.props;
    updateRequestAndOrders({}, request)
  }

  handleClickFilter = () => {
    this.setState(state => ({showFilter: !state.showFilter}));
  };


  render() {
    const {classes, fetchOrders, updateRequestAndOrders, request, orders, notifications} = this.props;
    const {showFilter} = this.state;

    const FilterButton = <Button onClick={this.handleClickFilter}>
      <FilterList style={{marginRight: '8px'}}/>
      Фильтры
    </Button>;

      const content = [{name: "stand", label: "Контур", form: <FilterStand key={'stand-filter'} tests={["1", "2"]}/>}];

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
          request={request}
          content={content}
          close={this.handleClickFilter}
          isOpen={showFilter}
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
