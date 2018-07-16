import React from 'react'
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, {textFilter, selectFilter} from 'react-bootstrap-table2-filter';

class TestsTable extends React.Component {

  render() {

    const columns = [
      {
        dataField: 'id_order',
        text: 'ID заявки:',
        formatter: this.renderOrderDetails,
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        })
      }, {
        dataField: 'chain_name',
        text: 'Имя цепочки:',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        })
      }, {
        dataField: 'marker',
        text: 'Маркер данных:',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        })

      }, {
        dataField: 'real_start_time',
        text: 'Время запуска:',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        })

      }, {
        dataField: 'displayed_status',
        text: 'Текущий статус:',
        sort: true,
        formatter: this.renderBuildStatusRef,
        filter: textFilter({
          placeholder: 'Поиск'
        })
      },
      // {
      //   headerStyle: { position: 'top' },
      //   dataField: 'id_order',
      //   text: 'Перезапуск:',
      //   formatter: this.renderRerunButton,
      //   align: 'center'
      // },
    ];
    //Ещё описание таблицы: дефолтные сортировки и т.п.
    const defSort = [
      {
        dataField: 'real_start_time',
        order: 'desc'
      }];

    return (
          <BootstrapTable keyField='id'
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
