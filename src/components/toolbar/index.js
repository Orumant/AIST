import React from 'react'
import {Button, ButtonGroup, ButtonToolbar, Col, Glyphicon, Row,} from "react-bootstrap";

class Toolbar extends React.Component {
  render() {
    const {
      onNewEntryAdded,
      onDelete,
      style,
      onDuplicate,
      duplicateDisabled,
      additionalElement,
    } = this.props;

    const addNewBtn = (
      <Button key={'addNewBtn'} bsStyle={'primary'} onClick={onNewEntryAdded}>
        <Glyphicon glyph='glyphicon glyphicon-plus-sign'/> Создать
      </Button>);

    const deleteBtn = (
      <Button key={'deleteBtn'} bsStyle={'danger'} onClick={onDelete}>
        <Glyphicon glyph='glyphicon glyphicon-trash'/> Удалить
      </Button>
    );
    const duplicateBtn = [
      <Button key={'duplicateBtn'}
              bsStyle={'primary'} onClick={onDuplicate} disabled={duplicateDisabled}><Glyphicon
        glyph={'glyphicon glyphicon-duplicate'}/> Клонировать</Button>
    ];

    return (
      <div
        key="toolbar-container"
        style={{
        ...style,
        position: 'relative',
        backgroundColor: '#EEE',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #CCC',
        borderRadius: 3,
        padding: 5,
      }}>
        <Row key="toolbar-container-row">
          <Col md={12}>
            <ButtonToolbar>
              <ButtonGroup>
                {onNewEntryAdded && addNewBtn}
              </ButtonGroup>
              <ButtonGroup>
                {onDuplicate && duplicateBtn}
              </ButtonGroup>
              <ButtonGroup>
                {onDelete && deleteBtn}
              </ButtonGroup>
              <ButtonGroup style={{
                position: 'relative',
                float: 'right',
              }}>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        {additionalElement && [<div key={'spacer'} style={{height: '10px'}}/>, additionalElement]}
      </div>
    )
  }
}

export default Toolbar
