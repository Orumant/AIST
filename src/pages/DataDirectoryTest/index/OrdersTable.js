import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {RenderOrderDetails, renderUseButton} from "./DataDirectoryTestButtons";
import DataJSON from "./OrdersTable/DataJSON";


class OrdersTable extends React.Component {

  state = {
    isOrderData: false,
  };

  changeOrderDataStatus = (val) => {
    this.setState({isOrderData: val})
  };

  handleOpen = (id_order) => {
    this.props.getOrderJSON(id_order);
    this.changeOrderDataStatus(true)
  };


   render () {

    const columns = [
      {
        dataField: 'id_order',
        text: 'ID заявки:',
        formatter: RenderOrderDetails(this.handleOpen),
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'chain_name',
        text: 'Имя цепочки:',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'end_time',
        text: 'Время создания',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'tags',
        text: 'Теги',
        sort: true,
        filter: textFilter({
          placeholder: 'Поиск'
        }),
      }, {
        dataField: 'id_order',
        text: 'Взятие данных:',
        formatter: renderUseButton(this.props.request, this.props.lockOrder, this.props.unlockOrder),
        align: 'center'
      }
    ];
     //Ещё описание таблицы: дефолтные сортировки и т.п.
     const defSort = [
       {
         dataField: 'real_start_time',
         order: 'desc'
       }];

     const {isOrderData} = this.state;
     const {data, order_data} = this.props;

     return (
       <div>
       <BootstrapTable keyField='id'
                       data={data}
                       columns={columns}
                       defaultSorted={defSort}
                       pagination={paginationFactory()}
                       noDataIndication={"Нет данных по запросу"}
                       filter={filterFactory()}
                       striped
                       overlay={overlayFactory()}/>
         {isOrderData ? <DataJSON data={order_data} close={() => this.changeOrderDataStatus(false)}/> : null}
       </div>
     )
   }
}

export default OrdersTable
