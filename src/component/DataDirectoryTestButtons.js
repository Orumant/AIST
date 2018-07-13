import React from 'react'
import {Button, OverlayTrigger, Popover} from "react-bootstrap";
import {BACKEND_URL} from "../constants/endpoints";
import TestTagsPopup from "../containers/TestTagsPopup";

export const goArchiveBtn = (onChange, request) =>
  <Button block onClick={() => onChange({locked: true}, request)}>Перейти в архив</Button>;


export const goDataBtn = (onChange, request) =>
  <Button block onClick={() => onChange({locked: false}, request)} bsStyle="primary">Перейти  данным</Button>;


export const renderUseButton = (request, lockOrder, unlockOrder) => (cell, row, rowIndex) => {
  if (!request.locked) return lockOrderButton(lockOrder, row.id_order, request);
  return unlockOrderButton(unlockOrder, row.id_order, request)
}

const lockOrderButton = (lock, id_order, request) => {
  return (
    <span>
          <Button
            href={`${BACKEND_URL}/objects/${id_order}/csv`}
            bsStyle="primary"
            bsSize="small"
            title="Получение данных по заявке"
            onClick={() => lock(id_order, request)}
          >Использовать
        </Button>
    </span>
  )
};

const unlockOrderButton = (unlock, id_order, request) => {
  return (
    <span>
          <Button
            bsStyle="primary"
            bsSize="small"
            title="Вернуть в реестр"
            onClick={() => unlock(id_order, request)}
          >Вернуть в реестр
        </Button>
    </span>
  )
};

export const RenderOrderDetails = (openWindow) => (cell, row, rowIndex) => {
  return (
        <a href onClick={() => openWindow(row.id_order)}>{row.id_order}</a>
  )
}

export const RenderTestsDetails = (cell, row, rowIndex) => {
  return (
    row.tests.map(test => <TestTagsPopup test_id={test}/>)
  )
}
