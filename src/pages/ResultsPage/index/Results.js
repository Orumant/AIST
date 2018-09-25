import React from 'react';
import {detect} from 'detect-browser';
import Notifications from 'react-notification-system-redux';
import PageContent from '../../_global/PageContent'
import TestsTable from "../../../containers/ResultsPage/TestTable";
import TestTableIE from "../../../containers/ResultsPage/TestTableIE";
import SearchBar from "../../../containers/ResultsPage/SearchBar";
import {Alert} from "react-bootstrap";
import './style.css';

class Results extends React.Component {

  request = {};

  componentDidMount() {
    const {fetchOrders} = this.props;
    fetchOrders(this.request);
  }


  render() {
    const {fetchOrders, orders, notifications, isFetching} = this.props;
    const browser = detect();

    const FilterBar = <SearchBar
      key='results-sidebar'
      submit={fetchOrders}
      startRequest={this.request}
      />;

      const Content = [
        browser.name == 'ie'?
          <TestTableIE key='results-table' orders={orders}/>:
          <TestsTable key='results-table' orders={orders}/>,
        <Notifications key='results-notification' notifications={notifications}/>];

      const alertMessage = <Alert bsStyle={"danger"}>
        <h4>Неподдерживаемый браузер</h4>
        Часть функционала данного модуля не работает. Для использования всех возможностей АИСТ, пожалуйста,
        установите Google Chrome(версии 61+)
      </Alert>

    return [
      browser.name == 'ie'? alertMessage : null,
      <PageContent
        isFilter={true}
        isLoading={isFetching}
        FilterBar={FilterBar}
        content={Content}
      />
      ]

  }
}

export default Results;
