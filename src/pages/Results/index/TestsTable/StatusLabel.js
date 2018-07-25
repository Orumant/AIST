import React from 'react'
import {Button, Label} from "react-bootstrap";

const SuccessLabel = <Button bsStyle={"success"} block>Успех</Button>;
const FailureLabel = <Button bsStyle={"danger"} block>Провал</Button>;

export const StatusLabel =  (cell, row, rowIndex) => {
  return (
    <div>
      {cell === 'SUCCESS'? SuccessLabel: FailureLabel}
    </div>
  )
};
