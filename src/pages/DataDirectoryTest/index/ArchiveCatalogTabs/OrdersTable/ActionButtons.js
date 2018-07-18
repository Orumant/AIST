import React from 'react'
import {Button} from "react-bootstrap";
import {BACKEND_URL} from "../../../../../constants/endpoints";

export const ActionButtons = (request, lockOrder, unlockOrder, openWindow) => (cell, row, rowIndex) => {
  return (
    <span>
      {!request.locked ? previewButton(openWindow, row.id_order) : null}
      {useButton(request, lockOrder, unlockOrder, row.id_order)}
    </span>
  )
}

const useButton = (request, lockOrder, unlockOrder, id_order) => {
  if (!request.locked) return lockOrderButton(lockOrder, id_order, request);
  return unlockOrderButton(unlockOrder, id_order, request)
}

const lockOrderButton = (lock, id_order, request) => {
  return (
    <span>
          <Button
            href={`${BACKEND_URL}/objects/${id_order}/csv`}
            bsStyle="action btn-primary btn-sm"
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
            bsStyle="action btn-primary btn-sm"
            title="Вернуть в реестр"
            onClick={() => unlock(id_order, request)}
          >Вернуть в реестр
        </Button>
    </span>
  )
};

export const previewButton = (openWindow, id_order) => {
  return (
    <Button
      bsStyle="action btn-primary btn-sm"
      title="Предпросмотр"
      onClick={() => openWindow(id_order)}
    >Предпросмотр
    </Button>)
}
