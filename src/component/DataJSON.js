import React from 'react'
import {Button, Modal} from "react-bootstrap";

class DataJSON extends React.Component {


  render() {
    const {data, close} = this.props
    console.log(data)
    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Данные заявки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
        export default dataJSON
      </Modal.Dialog>
    )
  }
}

export default DataJSON

