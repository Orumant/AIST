import React from 'react'
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter, selectFilter} from 'react-bootstrap-table2-filter';
import BootstrapTable from 'react-bootstrap-table-next';
import {StatusLabel} from "./TestsTable/StatusLabel";
import {Status} from "./TestsTable/Status";
import {Progress} from "./TestsTable/Progress";

class TestsTable extends React.Component {

  render() {

    const columns = [
      {
        dataField: 'id_order',
        text: 'ID заявки:',
        headerAlign: 'center',
        sort: true,
      }, {
        dataField: 'chain_name',
        text: 'Имя цепочки:',
        headerAlign: 'center',
        sort: true,
      }, {
        dataField: 'marker',
        text: 'Маркер данных:',
        headerAlign: 'center',
      }, {
        dataField: 'end_time',
        text: 'Время создания',
        headerAlign: 'center',
        sort: true,
      }, {
        text: 'Прогресс',
        headerAlign: 'center',
        formatter: Progress,
        sort: true,
        align: 'center'
      }, {
        dataField: 'displayed_status',
        text: 'Этап',
        headerAlign: 'center',
        formatter: Status,
        sort: true,
      }, {
        dataField: 'status',
        text: 'Статус',
        headerAlign: 'center',
        formatter: StatusLabel,
        sort: true,
        align: 'center'
      }, {
        dataField: 'locked',
        text: 'Действия:',
        headerAlign: 'center',
        align: 'center'
      }
    ];
    //Ещё описание таблицы: дефолтные сортировки и т.п.
    const defSort = [
      {
        dataField: 'end_time',
        order: 'desc'
      }];

    return (
          <BootstrapTable keyField='id_order'
                          data={this.props.orders}
                          columns={columns}
                          defaultSorted={defSort}
                          pagination={paginationFactory()}
                          noDataIndication={"Нет данных по запросу"}
                          filter={filterFactory()}
                          striped
                          overlay={overlayFactory()}/>
    )
  }
}

export default TestsTable
