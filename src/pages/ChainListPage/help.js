import React from 'react'
import {Button, Modal} from "react-bootstrap";


class ChainEditorHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Чтобы редактировать существующую цепочку, необходимо:</p>,
      <li type="square">Выбрать цепочку из списка слева</li>,
      <li type="square">Выбрать необходимые тесты справа</li>,
      <li type="square">(Опционально) Поменять порядок тестов, перетащив нужный элемент на нужную позицию</li>,
      <li type="square">(Опционально) Изменить имя цепочки в поле Name</li>,
      <li type="square">(Опционально) Изменить маркер цепочки в поле Marker</li>,
      <li type="square">(Опционально) Изменить список доступных для цепочки шаблонов с параметрами</li>,

      <li type="square">После того, как все изменения внесены, необходимо нажать кнопку Submit</li>,
      <br/>,
      <p>
      Чтобы создать новую цепочку, необходимо:
  </p>,
    <li type="square">Нажать кнопку Add new chain template</li>,
    <li type="square">Выбрать необходимые тесты справа</li>,
    <li type="square">Поменять порядок тестов, перетащив нужный элемент на нужную позицию</li>,
    <li type="square">Изменить имя цепочки в поле Name</li>,
    <li type="square">Изменить маркер цепочки в поле Marker</li>,
    <li type="square">(Опционально) Изменить список доступных для цепочки шаблонов с параметрами</li>,
    <li type="square">После того, как все изменения внесены, необходимо нажать кнопку Submit</li>,
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

export default ChainEditorHelp

