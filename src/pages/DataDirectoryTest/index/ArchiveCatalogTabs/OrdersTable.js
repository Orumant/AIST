import React from 'react'
import filterFactory from "react-bootstrap-table2-filter";
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {ActionButtons} from "./OrdersTable/ActionButtons";
import DataJSON from "./OrdersTable/DataJSON";
import {JSONwithoutBrakets} from "../../../../utils/filters/index";


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

     const renderTags = (cell, row, rowIndex) => {console.log(row); return (<span>{JSONwithoutBrakets(JSON.stringify(cell))}</span>)}

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
        dataField: 'end_time',
        text: 'Время создания',
        headerAlign: 'center',
        sort: true,
      }, {
        dataField: 'tags',
        text: 'Теги',
        headerAlign: 'center',
        formatter: renderTags,
        sort: true,
      }, {
        dataField: 'locked',
        text: 'Действия:',
        formatter: ActionButtons(this.props.request, this.props.lockOrder, this.props.unlockOrder, this.handleOpen),
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

     const {isOrderData} = this.state;
     const {data, order_data} = this.props;

     return (
       <div>
        <BootstrapTable keyField='id_order'
                   data={data}
                   columns={columns}
                   defaultSorted={defSort}
                   pagination={paginationFactory()}
                   noDataIndication={"Нет данных по запросу"}
                   filter={filterFactory()}
                   striped/>
         {isOrderData ? <DataJSON data={order_data} close={() => this.changeOrderDataStatus(false)}/> : null}
       </div>
     )
   }
}

export default OrdersTable
