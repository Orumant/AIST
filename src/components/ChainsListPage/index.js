import React from 'react'
import './style.css'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {forceLogin, getUserName,} from '../../globalFunc';
import {Button, Col, Glyphicon, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row,} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn,} from 'react-bootstrap-table'
import Header from "../Header";
import Loading from 'react-loading'
import Select from 'react-select';

class ChainsListPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.testFormatter = this.testFormatter.bind(this);
    this.tagFormatter = this.tagFormatter.bind(this);
    this.fetchAllChainTemplates = this.fetchAllChainTemplates.bind(this);
    this.fetchFullChainTemplateList = this.fetchFullChainTemplateList.bind(this);
    this.actionFormatter = this.actionFormatter.bind(this);
    this.handleSelectNameChange = this.handleSelectNameChange.bind(this);
    this.handleSelectTagsChange = this.handleSelectTagsChange.bind(this);
    this.handleSelectMarkerChange = this.handleSelectMarkerChange.bind(this);
    this.handleSelectStandsChange = this.handleSelectStandsChange.bind(this);
    this.handleFilterChainTemplateList = this.handleFilterChainTemplateList.bind(this);
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

  componentWillMount() {
    forceLogin();
    this.props.fetchStands();

    let promise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve(this.fetchAllChainTemplates)
      }, 1000);
    });

    this.fetchAllChainTemplates();
    promise.then(this.fetchFullChainTemplateList);
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
    return (
      <div className='chain-component-span' onClick={(e, value) => this.handleShow(cell.test_info)}>
        {new Array(cell.tests).join(',')}
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

  handleSelectNameChange(name) {
    this.setState({
      filters: {
        ...this.state.filters,
        nameSelectValue: name,
      }
    });
  }

  handleSelectTagsChange(tags) {
    this.setState({
      filters: {
        ...this.state.filters,
        tagsSelectValue: tags,
      }
    });
  }

  handleSelectStandsChange(stand) {
    this.setState({
      filters: {
        ...this.state.filters,
        standsSelectValue: stand,
      }
    });
  }

  handleSelectMarkerChange(marker) {
    this.setState({
      filters: {
        ...this.state.filters,
        markerSelectValue: marker,
      }
    });
  }

  handleFilterChainTemplateList() {
    if (this.state.filters.nameSelectValue.length > 0
      || this.state.filters.standsSelectValue.length > 0
      || this.state.filters.markerSelectValue.length > 0) {
      this.props.filterChainTemplateListByParams(this.state.filters);
    }
    if (this.state.filters.tagsSelectValue.length > 0)
      this.props.filterChainTemplateListByTags(
        {tag_names: this.state.filters.tagsSelectValue.map(f => f.label)});
  }

  render() {
    const chains = this.props.filterChainTemplateList;
    const stands = this.props.stands;
    const tags = this.props.tags;

    if (chains === undefined) {
      return [
        <Header owner={getUserName()}/>,
        <div className='chain-component-loading'>
          <Loading type='spin' color='#457A8C' height='10%' width='10%'/>
        </div>
      ]
    }
    else {
      const nameSearchOpt = chains.map((chain, index) => {
        return {label: chain.name, value: index}
      });

      const markerSearchOpt = chains.map((chain, index) => {
        return {label: chain.marker, value: index}
      });

      const tagsSearchOpt = tags.map((tag, index) => {
        return {label: tag, value: index}
      });

      const standsSearchOpt = stands.map((stand, index) => {
        return {label: stand.code, value: index}
      });

      const searchBtn = [
        <Button className='chain-component-btn-search' onClick={this.handleFilterChainTemplateList}>
          <Glyphicon glyph='glyphicon glyphicon-search'/> Поиск
        </Button>
      ];

      const clearBtn = [
        <Button className='chain-component-btn-refresh' onClick={this.fetchChainTemplateList}>
          <Glyphicon glyph='glyphicon glyphicon-refresh'/> Сброс
        </Button>
      ];

      const selectSearchPanel = (
        <div className='chain-component-panel-search'>
          <Select className={'chain-component-select-search-name'}
                  multi={true}
                  options={nameSearchOpt}
                  value={this.state.filters.nameSelectValue}
                  placeholder={'Имя цепочки...'}
                  onChange={this.handleSelectNameChange}
          />
          <Select className={'chain-component-select-search-tags'}
                  multi={true}
                  options={tagsSearchOpt}
                  value={this.state.filters.tagsSelectValue}
                  placeholder={'Теги...'}
                  onChange={this.handleSelectTagsChange}
          />
          <Select className={'chain-component-select-search-stand'}
                  multi={true}
                  options={standsSearchOpt}
                  value={this.state.filters.standsSelectValue}
                  placeholder={'Контур...'}
                  onChange={this.handleSelectStandsChange}
          />
          <Select className={'chain-component-select-search-marker'}
                  multi={true}
                  options={markerSearchOpt}
                  value={this.state.filters.markerSelectValue}
                  placeholder={'Маркер...'}
                  onChange={this.handleSelectMarkerChange}
          />
          {searchBtn}
          {clearBtn}
        </div>
      );

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

      return [<Header owner={getUserName()}/>,
        <div className='chain-component-tbl'>
          {selectSearchPanel}
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
                               dataFormat={this.tagFormatter}>
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
      ];
    }
  }
}

export default ChainsListPage;
