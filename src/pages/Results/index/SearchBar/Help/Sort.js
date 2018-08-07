import React from 'react';
import Sort from '../../../../../assets/Sort.gif';

export const SortHelp = [
  <h3 key={"sort-title"}>Сортировка</h3>,
  <ul key={"sort-list"}>
    <li key={"sort-1"}>1. Нажмите на название столбца для сортировки записей по возрастанию</li>
    <li key={"sort-2"}>2. Повторно нажмите на название столбца для сортировки записей по убыванию</li>
  </ul>,
  <img key={"sort-gif"} style={{width: '100%', maxWidth: '1005px'}} src={Sort} className="center-block"/>
];
