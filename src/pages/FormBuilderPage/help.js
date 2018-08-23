import React from 'react'
import {Button, Modal} from "react-bootstrap";


class FormBuilderHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Чтобы редактировать форму существующей цепочки, необходимо:</p>,
      <li type="square">Выбрать цепочку из выпающего списка вверху слева</li>,
      <li type="square">Выбрать тип поля в выпадающем списке снизу слева и нажать кнопку +</li>,
      <li type="square">Ввести необходимые для данного поля параметры</li>,
      <li type="square">После того, как все изменения внесены, необходимо нажать кнопку Отправить</li>,
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

export default FormBuilderHelp

