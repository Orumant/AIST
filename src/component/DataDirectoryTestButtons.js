import React from 'react'
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BACKEND_URL} from "../constants/endpoints";

export const goArchiveBtn = <Button onClick={() => this.setState({isData: false, isArchive: true})
}>Перейти в архив</Button>

export const goDataBtn = <Button bsStyle="primary" onClick={() => this.setState({isData: true, isArchive: false})
}>Перейти  данным</Button>


const handleGetData = (cell) => {
  this.props.lockOrder(cell)
}

export const RenderGetDataButton = (cell, row, rowIndex) => {
  return (
    <span>
          <Button
            href={`${BACKEND_URL}/objects/${row.id_order}/csv`}
            bsStyle="success"
            bsSize="medium"
            title="Получение данных по заявке"
            disabled={row.f_used != "0"}
          >Использовать
        </Button>
    </span>
  )
}

export const RenderOrderDetails = (openWindow) => (cell, row, rowIndex) => {

  return (
        <a href onClick={() => openWindow(row.id_order)}>{row.id_order}</a>
  )
}
