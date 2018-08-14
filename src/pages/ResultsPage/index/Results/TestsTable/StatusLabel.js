import React from 'react'
import {Table} from "@devexpress/dx-react-grid-material-ui";


const Cell = (value, background, color, style) =>
  <Table.Cell style={{backgroundColor: background, textAlign: 'center', ...style}}>
    <span style={{color: color, ...style}}>{value}</span>
  </Table.Cell>

export const StatusLabel =  ({value, style}) => {
  switch(value) {
    case 'SUCCESS': return Cell("Успех", "#5cb85c", "#fff", style); //"#5cb85c", "#fff"
    case 'FAILURE': return Cell("Провал", "#d9534f", "#fff", style); //"#d9534f", "#fff"
    case 'RUNNING': return Cell("Выполняется", "#f0ad4e", "#fff", style); //"#f0ad4e", "#fff"
    case 'DEFERRED': return Cell("Отложено", "#5bc0de", "#fff", style); //"#5bc0de", "#fff"
    case 'SCHEDULED': return Cell("Запланировано", "#337ab7", "#fff", style); //"#337ab7", "#fff"
    case 'no run': return Cell("Не запущена", null, "#333", style); //"#fff", "#333"
    default:
      return <span>{value}</span>
  }
};
