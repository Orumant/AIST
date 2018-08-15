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

class ChainsList extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.testFormatter = this.testFormatter.bind(this);
    this.tagFormatter = this.tagFormatter.bind(this);
    this.fetchAllChainTemplates = this.fetchAllChainTemplates.bind(this);
    this.fetchFullChainTemplateList = this.fetchFullChainTemplateList.bind(this);
    this.actionFormatter = this.actionFormatter.bind(this);
    this.fetchChainTemplateList = this.fetchChainTemplateList.bind(this);
    this.state = {
      show: false,
      test_info: '',
      selectedOptions: '0',
      filterSearchTemplateList: [],
      filters: {
        nameSelectValue: [],
        tagsSelectValue: [],
        markerSelectValue: [],
        standsSelectValue: [],
      }
    }
  };

  request = {};

  componentDidMount() {
    this.props.fetchChains(this.request);
  }

  fetchAllChainTemplates() {
    this.props.fetchAllChainTemplates();
    return this.props.chainTemplateList;
  }

  fetchFullChainTemplateList() {
    this.props.fetchFullChainTemplateList();
    return this.props.fullChainTemplateList;
  }

  fetchChainTemplateList() {
    this.props.clearFilterChainTemplateList();
    this.setState({
      filters: {
        nameSelectValue: [],
        tagsSelectValue: [],
        markerSelectValue: [],
        standsSelectValue: [],
      }
    });
  }

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
  }

  testFormatter(cell) {
    console.log(new Array(cell).join(','))
    return (
      <div className='chain-component-span' onClick={(e, value) => this.handleShow(cell.test_info)}>
        {new Array(cell).join(',')}
      </div>
    );
  }

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
  }

  handleClose() {
    this.setState({show: false});
  }

  handleShow(value) {
    this.setState({test_info: value});
    this.setState({show: true});
  }

  render() {
    const { chains, fetchChains } = this.props;

    const FilterBar = <SearchBar
      key='chain-list-sidebar'
      submit={fetchChains}
      startRequest={this.request}
    />;

      const modalTestInfo = (
        <Modal show={this.state.show}>
          <ModalHeader className='chain-component-modal-header'>
            <ModalTitle>Информация по цепочке тестов</ModalTitle>
          </ModalHeader>
          <ModalBody>
            {Object.keys(this.state.test_info).map((idx) => {
              return (<Row key={idx}>
                <Col md={1} style={{fontWeight: 'bold'}}>{JSON.parse(this.state.test_info[idx]).id}</Col>
                <Col md={10}>{JSON.parse(this.state.test_info[idx]).info}</Col>
              </Row>)
            })}
          </ModalBody>
          <ModalFooter className='chain-component-modal-footer'>
            <Button className='chain-component-btn' onClick={(e) => this.handleClose(e)}>Закрыть</Button>
          </ModalFooter>
        </Modal>
      );

      const table =
        <BootstrapTable keyField='id' striped hover pagination
                                    data={chains} ignoreSinglePage trClassName='chain-component-col'>
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
      </BootstrapTable>;

      return [
        <div>
          <PageContent isFilter={true} FilterBar={FilterBar} content={table}/>
          {modalTestInfo}
        </div>
      ];
    }
}

export default ChainsList;
