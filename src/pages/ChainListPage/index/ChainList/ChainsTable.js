import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {BootstrapTable, TableHeaderColumn,} from 'react-bootstrap-table'
import TestInfo from "./ChainsTable/TestInfo";
import {CloneButton, EditButton} from "./ChainsTable/Buttons";
import {Button, Tooltip, OverlayTrigger} from "react-bootstrap";

class ChainsTable extends React.Component {

  state = {
    selectedOptions: '0',
    show: false,
    cell: [],
  };

  chainsFormatter = (cell) => {
    return (
      <Button
        bsStyle="primary"
        bsSize="sm"
        className="action"
        title="Посмотреть"
        onClick={() => this.openModal(cell)}>ПОКАЗАТЬ</Button>
    );
  };

  actionFormatter = (cell) => {
    const {chains_editable} = this.props;
    return <span>
      {CloneButton(cell)}
      {chains_editable.indexOf(cell) !== -1 ? EditButton(cell) : null}
      </span>};

  openModal = (cell) => {
    this.setState({show: true, cell: cell})
  };

  closeModal = () => {
    this.setState({show: false})
  };

  descriptionFormatter = (cell) => {
    const toolTip =<Tooltip id={cell} className={'tooltip-in'}>{cell}</Tooltip>;
    return (
      <OverlayTrigger placement={'bottom'} overlay={toolTip}>
        <div>
          {cell.length > 21 ? cell.substring(0, 20) + '...' : cell}
        </div>
      </OverlayTrigger>
    );
  };

  render() {
    const {data, testsAll} = this.props;
    const {show, cell} = this.state;

    return (
      <div>
        <BootstrapTable keyField='id' striped hover pagination
                        data={data} ignoreSinglePage trClassName='chain-component-col'>
          <TableHeaderColumn className='custom-header' key='id' width='120px' dataFormat={this.actionFormatter}
                             columnClassName='chain-component-col-select'
                             searchable={false} dataField='id'/>
          <TableHeaderColumn className='custom-header' key='id' dataField='name' dataSort={true}>
            Название
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='140px' dataField='tests'
                             dataAlign='center' dataFormat={this.chainsFormatter}>
            Состав цепочки
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='6%' dataField='stands' dataSort={true}>
            Контур
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='9%' searchable={true} dataField='asystems'>
            АС
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='12%' dataField='marker' dataSort={true}>
            Маркер
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='15%' dataField='templates'>
            Шаблоны
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='10%' searchable={true} dataField='tags'>
            Теги
          </TableHeaderColumn>
          <TableHeaderColumn className='custom-header' key='id' width='6%' dataField='groups'>
            Доступы
          </TableHeaderColumn>
        </BootstrapTable>
        <TestInfo show={show} testsData={testsAll} tests={cell} close={this.closeModal}/>
      </div>
    )
  }
}

/* до лучших времён <TableHeaderColumn className='custom-header' key='id' width='12%' searchable={false} dataField='name'
                    dataFormat={this.descriptionFormatter}>
   Комментарий
 </TableHeaderColumn>*/

export default ChainsTable;
