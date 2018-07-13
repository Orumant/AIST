import React from 'react'
import {Button, Modal} from "react-bootstrap";
import ChainsTable from "../containers/ChainsTable";


class ChainsByMarkerForm extends React.Component {

  render () {

    const {close, marker} = this.props;
    return (
        <Modal.Dialog bsSize={'lg'}>
          <Modal.Header closeButton onHide={close}>
          </Modal.Header>
          <Modal.Body>
            <ChainsTable marker={marker}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Закрыть</Button>
          </Modal.Footer>
        </Modal.Dialog>
    )
  }
}

export default ChainsByMarkerForm
