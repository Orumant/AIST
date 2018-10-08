import React from 'react'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle, Row,} from 'react-bootstrap'


class TestInfo extends React.Component {

  render() {
    const { show, tests, testsData, close } = this.props;

    return (
      <Modal show={show}>
        <ModalHeader className='chain-component-modal-header'>
          <ModalTitle>Информация по составу цепочки</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {tests.map((test, ind) => {
            return (<Row key={ind}>
              <Col md={1} style={{fontWeight: 'bold'}}>{testsData[test][0]}</Col>
              <Col md={10}>{testsData[test][1]}</Col>
            </Row>)
          })}
        </ModalBody>
        <ModalFooter className='chain-component-modal-footer'>
          <Button className='chain-component-btn' onClick={close}>Закрыть</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default TestInfo;
