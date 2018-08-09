import React from 'react'
import {Button, Glyphicon, Modal} from "react-bootstrap";


class TestBuilderHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Чтобы редактировать тест, необходимо:</p>,
      <li type="square">Выбрать тест из списка слева, или аоспользоваться строкой поиска</li>,
      <li type="square">Заполнить необходимые параметры теста в форме справа</li>,
      <li type="square" style={{color: 'red'}}>Обратите внимание, что выбор АС для теста обязателен!</li>,
    <li type="square">После того, как все изменения внесены, необходимо нажать кнопку
      <Button bsStyle={'success'} bsSize={'small'}><Glyphicon glyph='glyphicon glyphicon-floppy-disk'/></Button>
      </li>,
      <br/>,
      <p>Чтобы создать тест, необходимо:</p>,
    <li type="square">Нажать кнопку <Button bsStyle={'primary'} bsSize={'small'}><Glyphicon
      glyph='glyphicon glyphicon-plus-sign'/></Button></li>,
      <li type="square">Заполнить необходимые параметры теста в форме справа</li>,
      <li type="square" style={{color: 'red'}}>Обратите внимание, что выбор АС для теста обязателен!</li>,
    <li type="square">После того, как все изменения внесены, необходимо нажать кнопку
      <Button bsStyle={'success'} bsSize={'small'}><Glyphicon glyph='glyphicon glyphicon-floppy-disk'/></Button>
      </li>,
      <br/>,
      <p>Чтобы скопировать существующий тест, необходимо:</p>,
    <li type="square">Выбрать тест в списке слева</li>,
    <li type="square">Нажать кнопку <Button bsStyle={'primary'} bsSize={'small'}><Glyphicon
      glyph='glyphicon glyphicon-duplicate'/></Button></li>,
      <li type="square">Заполнить необходимые параметры теста в форме справа</li>,
      <li type="square" style={{color: 'red'}}>Обратите внимание, что выбор АС для теста обязателен!</li>,
    <li type="square">После того, как все изменения внесены, необходимо нажать кнопку
      <Button bsStyle={'success'} bsSize={'small'}><Glyphicon glyph='glyphicon glyphicon-floppy-disk'/></Button>
      </li>,
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

export default TestBuilderHelp

