import React from 'react'
import {Button, Modal} from "react-bootstrap";


class LauncherHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Для запуска цепочки:</p>,
      <li type="square">Выбрать цепочку из списка</li>,
      <li type="square">Заполнить параметры запуска</li>,
      <li type="square">Нажать кнопку Запуск</li>,
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

export default LauncherHelp

