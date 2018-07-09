import React from 'react'
import {Button, ButtonGroup, ButtonToolbar, Col, Glyphicon, Row,} from "react-bootstrap";

class Toolbar extends React.Component {
  render() {
    const {
      onNewEntryAdded,
      onDelete,
      help,
      style,
      onDuplicate,
      duplicateDisabled,
      additionalElement,
    } = this.props;

    const infoBtn = (
      <Button bsStyle={'info'} onClick={help}><Glyphicon
        glyph='glyphicon glyphicon-info-sign'/></Button>
    );
    const addNewBtn = (
      <Button bsStyle={'primary'} onClick={onNewEntryAdded}>
        <Glyphicon glyph='glyphicon glyphicon-plus-sign'/> Создать
      </Button>);

    const deleteBtn = (
      <Button bsStyle={'danger'} onClick={onDelete}>
        <Glyphicon glyph='glyphicon glyphicon-trash'/> Удалить
      </Button>
    );
    const duplicateBtn = [
      <Button bsStyle={'primary'} onClick={onDuplicate} disabled={duplicateDisabled}><Glyphicon
        glyph={'glyphicon glyphicon-duplicate'}/> Клонировать</Button>
    ];

    return (
      <div style={{
        ...style,
        position: 'relative',
        backgroundColor: '#EEE',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #CCC',
        borderRadius: 3,
        padding: 5,
      }}>
        <Row>
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
                {help && infoBtn}
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        {additionalElement && [<div style={{height: '10px'}}/>, additionalElement]}
      </div>
    )
  }
}

export default Toolbar
