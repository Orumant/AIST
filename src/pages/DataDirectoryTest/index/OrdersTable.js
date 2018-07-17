import React from 'react'
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import overlayFactory from 'react-bootstrap-table2-overlay';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import {RenderOrderDetails, renderUseButton} from "./DataDirectoryTestButtons";
import DataJSON from "./OrdersTable/DataJSON";
import {Tab, Tabs} from "react-bootstrap";


class OrdersTable extends React.Component {

  state = {
    isOrderData: false,
    key: 1,
  };

  changeOrderDataStatus = (val) => {
    this.setState({isOrderData: val})
  };

  handleOpen = (id_order) => {
    this.props.getOrderJSON(id_order);
    this.changeOrderDataStatus(true)
  };

  handleSelect = (key) => {
    const {updateRequestAndOrders, request} = this.props;
    if (key === 1) updateRequestAndOrders({locked: false}, request)
    else updateRequestAndOrders({locked: true}, request)
    this.setState({key})
  };


   render () {

    const columns = [
      {
        dataField: 'id_order',
        text: 'ID заявки:',
        formatter: RenderOrderDetails(this.handleOpen),
        sort: true,
      }, {
        dataField: 'chain_name',
        text: 'Имя цепочки:',
        sort: true,
      }, {
        dataField: 'end_time',
        text: 'Время создания',
        sort: true,
      }, {
        dataField: 'tags',
        text: 'Теги',
        sort: true,
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
         dataField: 'end_time',
         order: 'desc'
       }];

     const {isOrderData, key} = this.state;
     const {data, order_data} = this.props;
     console.log('atatat')

     return (
       <div className={'view-results-table'}>
         <Tabs
           activeKey={key}
           onSelect={this.handleSelect}>
           <Tab eventKey={1} title="Реестр">
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
             </div>
           </Tab>
           <Tab eventKey={2} title="Архив">
             <BootstrapTable keyField='id'
                             data={data}
                             columns={columns}
                             defaultSorted={defSort}
                             pagination={paginationFactory()}
                             noDataIndication={"Нет данных по запросу"}
                             filter={filterFactory()}
                             striped
                             overlay={overlayFactory()}/>
           </Tab>
         </Tabs>
         {isOrderData ? <DataJSON data={order_data} close={() => this.changeOrderDataStatus(false)}/> : null}
       </div>
     )
   }
}

export default OrdersTable
