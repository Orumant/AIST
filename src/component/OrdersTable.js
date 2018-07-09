import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {Button} from "react-bootstrap";
import {RenderGetDataButton, RenderOrderDetails} from "./DataDirectoryTestButtons";
import DataJSON from "./DataJSON";


class OrdersTable extends React.Component {

  state = {
    isOrderData: false,
  }

  changeOrderDataStatus(val){
    this.setState({isOrderData: val})
  }

  columns = [
    {
      dataField: 'id_order',
      text: 'ID заявки:',
      formatter: RenderOrderDetails(() => this.changeOrderDataStatus(true)),
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
     const {isOrderData} = this.state;
     const {data} = this.props;
     return (
       <div>
       <BootstrapTable keyField='id'
                       data={data}
                       columns={this.columns}
                       defaultSorted={this.defSort}
                       pagination={paginationFactory()}
                       noDataIndication={"Нет данных по запросу"}
                       filter={filterFactory()}
                       striped
                       overlay={overlayFactory()}/>
         {isOrderData ? <DataJSON data={"arrararara"} close={() => this.changeOrderDataStatus(false)}/> : null}
       </div>
     )
   }
}

export default OrdersTable
