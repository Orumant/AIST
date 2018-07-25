import React from 'react'
import {Button, Label} from "react-bootstrap";


export const Status =  (cell, row, rowIndex) => {

  return (
    <div>
      {cell? cell.split(":")[0]: null}
    </div>
  )
};
