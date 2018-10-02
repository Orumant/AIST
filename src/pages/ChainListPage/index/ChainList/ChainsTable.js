import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {BootstrapTable, TableHeaderColumn,} from 'react-bootstrap-table'
import TestInfo from "./ChainsTable/TestInfo";
import { EditButton, CloneButton } from "./ChainsTable/Buttons";

class ChainsTable extends React.Component {

  state = {
    selectedOptions: '0',
    show: false,
    cell: [],
  };

  testFormatter = (cell) => {
    return (
      <a className='chain-component-span' onClick={() => this.openModal(cell)}>
        {new Array(cell).join(',')}
      </a>
    );
  };

  actionFormatter = (cell, row) => {
    const { chains_editable } = this.props;
    return <span>
      {CloneButton(row.id)}
      {chains_editable.indexOf(row.name) !== -1 ? EditButton(row.id) : null}
      </span>};

  openModal = (cell) => {
    this.setState({show: true, cell: cell})
  };

  closeModal = () => {
    this.setState({show: false})
  };

  render() {
    const { data, testsAll } = this.props;
    const { show, cell } = this.state;

    return (
      <div>
        <BootstrapTable keyField='id' striped hover pagination
                        data={data} ignoreSinglePage trClassName='chain-component-col'>
          <TableHeaderColumn className='custom-header' key='id' dataField='name' dataSort={true}>
            Имя цепочки
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='12%' searchable={false} dataField='description'>
            Описание цепочки
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='12%' dataField='marker' dataSort={true}>
            Маркер
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='15%' dataField='templates'>
            Применимые шаблоны
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='9%' searchable={true} dataField='tests'
                             dataFormat={this.testFormatter}>
            Тесты в составе цепочки
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='10%' searchable={true} dataField='tags'
          >
            Теги
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='6%' dataField='stands' dataSort={true}>
            Контур
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='6%' dataField='groups'>
            Доступы
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='120px' dataFormat={this.actionFormatter}
                             columnClassName='chain-component-col-select'
                             searchable={false} dataField='id'>
            Доступные действия
          </TableHeaderColumn>
        </BootstrapTable>
        <TestInfo show={show} testsData={testsAll} tests={cell}  close={this.closeModal}/>
      </div>
    )
  }
}

export default ChainsTable;
