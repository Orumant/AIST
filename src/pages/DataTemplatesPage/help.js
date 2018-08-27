import React from 'react'
import {Button, Modal} from "react-bootstrap";


class DataTemplatesHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Чтобы редактировать шаблон, необходимо:</p>,
      <li type="square">Выбрать шаблон из списка слева</li>,
      <li type="square">Заполнить необходимые параметры шаблона в форме справа</li>,
      <li type="square">После того, как все изменения внесены, необходимо нажать кнопку Отправить</li>,
      <br/>,
      <p>Чтобы создать новый параметр, необходимо:</p>,
      <li type="square">Нажать кнопку Добавить новый параметр</li>,
      <li type="square">Заполнить необходимые параметры в форме справа</li>,
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

export default DataTemplatesHelp

