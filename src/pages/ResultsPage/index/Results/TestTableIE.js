import React from 'react'
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import TestProgress from "./TestsTable/TestProgress";
import {DownloadButton} from "./TestsTable/DownloadButton";
import {ReplayButton} from "./TestsTable/ReplayButton";


class TestsTableIE extends React.Component {

  render() {
    const {orders, restartChain} = this.props;

    const ProgressBar = (cell, row, rowIndex) =>  <TestProgress all={row.progress_overall} now={row.progress_passed}/>;
    const ULArow = (cell, row, rowIndex) => <a href={row.ula_launch_url}>{cell}</a>;
    const testName = (cell, row, rowIndex) => <a href={row.build_link}>{cell}</a>;
    const actions = (cell, row, rowIndex) =>
      <span>
        {DownloadButton(row.id_order)}
        {ReplayButton(row.status, row.id_order, restartChain)}
      </span>;

      const Cell = (value, background, color) =>
      <div style={{backgroundColor: background, textAlign: 'center', width: '100%', height: '100%'}}>
        <span style={{color: color}}>{value}</span>
      </div>;

    const StatusLabel = (cell) => {
      switch(cell) {
        case 'SUCCESS': return Cell("Успех", "#5cb85c", "#fff"); //"#5cb85c", "#fff"
        case 'FAILURE': return Cell("Провал", "#d9534f", "#fff"); //"#d9534f", "#fff"
        case 'RUNNING': return Cell("Выполняется", "#f0ad4e", "#fff"); //"#f0ad4e", "#fff"
        case 'DEFERRED': return Cell("Отложено", "#5bc0de", "#fff"); //"#5bc0de", "#fff"
        case 'SCHEDULED': return Cell("Запланировано", "#337ab7", "#fff"); //"#337ab7", "#fff"
        case 'no run': return Cell("Не запущена", null, "#333"); //"#fff", "#333"
        default:
          return <span>{cell}</span>
      }
    };

    const columns = [
      {
        dataField: "id_order",
        text: "ID заявки",
        headerAlign: 'center',
        sort: true,
      },
      {
        dataField: "chain_name",
        text: "Имя цепочки",
        headerAlign: 'center',
        sort: true,
      },
      {
        dataField: "marker",
        text: "Маркер данных",
        headerAlign: 'center',
        sort: true,
      },
      {
        dataField: "start_time",
        text: "Время создания",
        headerAlign: 'center',
        sort: true,
      },
      {
        dataField: "tags",
        text: "Теги",
        headerAlign: 'center',
        sort: true
      },
      {
        dataField: "progress",
        text: "Прогресс",
        headerAlign: 'center',
        formatter: ProgressBar,
      },
      {
        dataField: "ula_decision",
        text: "Решение ULA",
        headerAlign: 'center',
        formatter: ULArow,
      },
      {
        dataField: "test_name",
        text: "Этап",
        headerAlign: 'center',
        formatter: testName,
      },
      {
        dataField: "status",
        text: "Статус",
        headerAlign: 'center',
        sort: true,
        formatter: StatusLabel,
      },
      {
        dataField: "actions",
        text: "Действия",
        headerAlign: 'center',
        formatter: actions}
    ];
    //Ещё описание таблицы: дефолтные сортировки и т.п.
    const defSort = [
      {
        dataField: 'start_time',
        order: 'desc'
      }];

    return (
      <div>
        <BootstrapTable keyField='id_order'
                        data={orders}
                        columns={columns}
                        defaultSorted={defSort}
                        pagination={paginationFactory()}
                        noDataIndication={"Нет данных по запросу"}
                        filter={filterFactory()}
                        striped/>
      </div>
    )
  }
}

export default TestsTableIE
