import React from 'react'
import {Button, Modal} from "react-bootstrap";


class MainHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Для перехода в нужный модуль просто кликните по его иконке</p>,
    ];

    return (

      <div >
        <Modal show={true} onHide={close} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Помощь</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {content}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Закрыть</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default MainHelp

