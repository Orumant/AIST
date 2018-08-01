import React from 'react'
import {Button} from "react-bootstrap";

const SuccessLabel = <Button bsStyle={"success"} block>Успех</Button>;
const FailureLabel = <Button bsStyle={"danger"} block>Провал</Button>;
const RunningLabel = <Button bsStyle={"primary"} block>Выполняется</Button>;
const DefferedLabel = <Button bsStyle={"warning"} block>Отложено</Button>;
const ScheduledLabel = <Button bsStyle={"info"} block>Запланировано</Button>;
const NoRunLabel = <Button block>Не запущена</Button>;

const Label = (status) => {
  switch(status) {
    case 'SUCCESS': return SuccessLabel;
    case 'FAILURE': return FailureLabel;
    case 'RUNNING': return RunningLabel;
    case 'DEFERRED': return DefferedLabel;
    case 'SCHEDULED': return ScheduledLabel;
    case 'no run': return NoRunLabel;
    default:
      return <span>{status}</span>
  }
}

export const StatusLabel =  ({value, style}) => {
  return (
    <div>
      {Label(value)}
    </div>
  )
};
