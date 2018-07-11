import React from 'react'
import {Button, Modal} from "react-bootstrap";


class DataJSON extends React.Component {


  render() {
    const {data, close} = this.props
    return (
      <div >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Данные по заявке</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{'-webkit-user-select': 'none'}}>
            <span style={{color: 'red'}}>Внимание! Данные отображаются для просмотра.</span>
            <span>Просим не использовать данные, если вы собираетесь их модифицировать.
              Для использования нажмите кнопку "Использовать" в таблице</span>
            <pre style={{maxHeight: '400px', overflow: 'scroll'}}>
              {Object.keys(data).length > 0 ? JSON.stringify(data, null, 2) : "Данных нет"}
              </pre>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Закрыть</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}

export default DataJSON

