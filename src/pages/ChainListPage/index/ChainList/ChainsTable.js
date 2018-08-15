import React from 'react'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {forceLogin} from '../../../globalFunc';
import {Button, Col, Glyphicon, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row,} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn,} from 'react-bootstrap-table'
import Loading from 'react-loading'
import Select from 'react-select';
import PageContent from '../../_global/PageContent'
import SearchBar from "../../../containers/ChainListPage/SearchBar";

class ChainsTable extends React.Component {

  state = {
    selectedOptions: '0',
  };

  tagFormatter(cell) {
    return (
      <div>
        {cell.static.length === 0 ?
          '' :
          'Статические теги:' + cell.static + '\n'}
        {cell.dynamic.length === 0 ?
          '' :
          'Динамические теги:' + cell.dynamic + '\n'}
      </div>
    )
  };

  testFormatter(cell) {
    console.log(cell)
    return (
      <div className='chain-component-span' onClick={(e, value) => this.handleShow(cell.test_info)}>
        {new Array(cell.tests).join(',')}
      </div>
    );
  };

  actionFormatter(cell) {
    const value = this.state.selectedOptions;
    const options = [{label: 'Добавить', value: 0}, {label: 'Редактировать', value: 1}, {label: 'Удалить', value: 2}];
    return (
      <Select key={cell} className='chain-component-select'
              value={value}
              options={options}
              clearable={false}
              searchable={false}
      />
    )
  };

  render() {
    const { data } = this.props;

    return (
      <div>
        <BootstrapTable keyField='id' striped hover pagination
                        data={data} ignoreSinglePage trClassName='chain-component-col'>
          <TableHeaderColumn key='id' width='15%' dataField='name' dataSort={true}>
            Имя цепочки
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='12%' searchable={false} dataField='description'>
            Описание цепочки
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='12%' dataField='marker' dataSort={true}>
            Маркер
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='15%' dataField='templates'>
            Применимые шаблоны
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='9%' searchable={true} dataField='tests' dataFormat={this.testFormatter}>
            Тесты в составе цепочки
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='10%' searchable={true} dataField='tag_names'
            // dataFormat={this.tagFormatter}
          >
            Теги
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='6%' dataField='stand' dataSort={true}>
            Контур
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='6%' dataField='groups'>
            Доступы
          </TableHeaderColumn>
          <TableHeaderColumn key='id' width='15%' dataFormat={this.actionFormatter}
                             columnClassName='chain-component-col-select'
                             searchable={false} dataField='id'>
            Доступные действия
          </TableHeaderColumn>
        </BootstrapTable>
        {modalTestInfo}
      </div>
    )
  }
}

export default ChainsTable;
