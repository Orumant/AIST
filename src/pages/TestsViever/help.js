import React from 'react';
import {Button, Modal} from "react-bootstrap";
import Typography from "@material-ui/core/es/Typography/Typography";
import tBody from '../../assets/tBody.PNG';

export default function TestsViewerHelp ({close}) {
  return (
    <div>
      <Modal show={true} onHide={close} bsSize="large">
        <Modal.Header closeButton>
          <Modal.Title>Реестр тестов</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography variant={"headline"} paragraph>Описание</Typography>
          <Typography variant={"body1"} paragraph>
            Данная страница предназначена для отображения тестов. На ней вы можете найти интересующий вас тест, посмотреть его параметры и, при необходимости, отредактировать его.
          </Typography>
          <Typography variant={"headline"} paragraph>Тело таблицы</Typography>
          <img style={{width: '100%'}} alt="Table body" src={tBody}/>
          <Typography variant={"body1"} paragraph>
            В теле таблицы отражена информация по каждому тесту. В самом левом столбце расположена кнопка редактирования теста, по нажатию которой открывается редактор теста.
          </Typography>
          <Typography variant={"body1"} paragraph>
            В столбце "Параметры Jenkins" находится кнопка, вызывающая окно с таблицей параметров Jenkins.
          </Typography>
          <Typography variant={"body1"} paragraph>
            Таблицу можно отсортировать по наименованию, стендам и АС. Для этого нужно просто нажать на наименование столбца. При повторном нажатии таблица отсортируется в обратном прядке
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={close}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
