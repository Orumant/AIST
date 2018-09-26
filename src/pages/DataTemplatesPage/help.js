import React from 'react'
import {Button, Modal} from "react-bootstrap";


class DataTemplatesHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>Данный модуль предназначен для создания шаблонов параметров для цепочек.
        В этом случае вам не придётся вводить все переменные для цепочки на этапе её запуска, достаточно будет выбрать подходящий шаблон.</p>,
      <p>Или несколько шаблонов в порядке иерархии. Например, вы можете создать шаблон для создания обычного клиента с дебетовой картой и шаблон на создание особого клиента (пенсионера, например).
        Указав при запуске сначала шаблон по созданию клеинта с картой, а потом указав шаблон особого клиента, вы создадите особого клиента с картой.</p>,
      <p>При указании параметров запуска, пересекающимися с параметрами шаблона, первые будут иметь приоритет.
        В этом случае параметры в шаблоне можно считать параметрами по умолчанию.</p>,
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

