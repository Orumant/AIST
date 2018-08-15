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


  render() {
    const { show } = this.props;

    return (
      <Modal show={show}>
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
    )
  }
}

export default ChainsTable;
