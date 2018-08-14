import React from 'react';
import {Table} from "@devexpress/dx-react-grid-material-ui";


const Cell = (url, value, color, style) =>
  <Table.Cell style={{textAlign: 'center', ...style}}>
    <b><a href={url} style={{color: color, ...style}}>{value}</a></b>
  </Table.Cell>;

export const ULAdecision =  ({url, value, style}) => {
  switch(value) {
    case 'Подключение к ULA отсутствует': return Cell(url, value, "rgb(0,150,136)", style); //"#5cb85c", "#fff"
    case 'Ошибка получения решения из ULA': return Cell(url, value.concat('(Проставить)'), "rgb(255,140,7)", style); //"#d9534f", "#fff"
    case 'Некорректные исходные данные': return Cell(url, value, "rgb(244,37,44)", style); //"#f0ad4e", "#fff"
    default:
      return  <Table.Cell style={{textAlign: 'center', ...style}}><span>{value}</span></Table.Cell>;
  }
};
