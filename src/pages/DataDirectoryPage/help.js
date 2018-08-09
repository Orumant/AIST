import React from 'react'
import {Button, Modal} from "react-bootstrap";


class DataDirectoryHelp extends React.Component {

  render() {
    const {close} = this.props;

    const content = [
      <p>В данном модуле находится информация о заявках, которые прошли успешно</p>,
      <p>Для того, чтобы посмотреть информацию по заявке, нажмите на кнопку "Предпросмотр" рядом с нужной заявкой</p>,
      <p>Для того, чтобы использовать информацию по заявке, нажмите на кнопку "Использовать" рядом с нужной заявкой. После использования заявка будет перенесена в архив</p>,
      <p>Для  перехода в архив нажмите на вкладку "Архив"</p>,
      <p>Для того, чтобы вернуть заявку в реестр, нажмите на кнопку "Вернуть в реестр" рядом с нужной заявкой</p>,
      <p>Для  перехода к реестру нажмите на вклюдку "Реестр"</p>,
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

export default DataDirectoryHelp

