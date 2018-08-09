import React from 'react'
import {Button, Modal} from "react-bootstrap";


class PersonalHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>На этой странице вы можете создать новую группу, добавить пользователей в уже существующую группу или посмотреть в какие группы входит данный пользователь</p>,
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

export default PersonalHelp

