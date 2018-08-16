import React from 'react'
import {Button} from "react-bootstrap";
import {BACKEND_URL} from "../../../../../../constants/endpoints";

export const ActionButtons = (request, lockOrder, unlockOrder, openWindow) => (cell, row, rowIndex) => {
  return (
    <span>
      {!request.locked ? previewButton(openWindow, row.id_order) : null}
      {useButton(request, lockOrder, unlockOrder, row.id_order)}
    </span>
  )
}

const useButton = (request, lockOrder, unlockOrder, id_order) => {
  if (!request.locked) return lockOrderButton(lockOrder, id_order);
  return unlockOrderButton(unlockOrder, id_order)
}

const lockOrderButton = (lock, id_order) => {
  return (
    <span>
          <Button
            href={`${BACKEND_URL}/objects/${id_order}/csv`}
            bsStyle="primary"
            bsSize="sm"
            className="action"
            title="Получение данных по заявке"
            onClick={() => lock(id_order)}
          >Использовать
        </Button>
    </span>
  )
};

const unlockOrderButton = (unlock, id_order) => {
  return (
    <span>
          <Button
            bsStyle="primary"
            bsSize="sm"
            className="action"
            title="Вернуть в реестр"
            onClick={() => unlock(id_order)}
          >Вернуть в реестр
        </Button>
    </span>
  )
};

export const previewButton = (openWindow, id_order) => {
  return (
    <Button
      bsStyle="primary"
      bsSize="sm"
      className="action"
      title="Предпросмотр"
      onClick={() => openWindow(id_order)}
    >Предпросмотр
    </Button>)
}
