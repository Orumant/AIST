import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {Button} from "react-bootstrap";
import {RenderGetDataButton, renderOrderDetails} from "./DataDirectoryTestButtons";


class OrdersTable extends React.Component {
  columns = [
    {
      dataField: 'id_order',
      text: 'ID заявки:',
      formatter: renderOrderDetails,
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'chain_name',
      text: 'Имя цепочки:',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'end_time',
      text: 'Время создания',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'tags',
      text: 'Теги',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'id_order',
      text: 'Взятие данных:',
      formatter: RenderGetDataButton,
      align: 'center'
    }
    //TODO вернуть эти кнопки
  ];
  //Ещё описание таблицы: дефолтные сортировки и т.п.
   defSort = [
    {
      dataField: 'real_start_time',
      order: 'desc'
    }];

   render () {
     console.log(this.props.getOrderCSV)

     return (
       <BootstrapTable keyField='id'
                       data={this.props.data}
                       columns={this.columns}
                       defaultSorted={this.defSort}
                       pagination={paginationFactory()}
                       noDataIndication={"Нет данных по запросу"}
                       filter={filterFactory()}
                       striped
                       overlay={overlayFactory()}/>
     )
   }
}

export default OrdersTable
