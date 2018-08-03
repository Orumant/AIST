import React from 'react';
import FilterDate from '../../../../../assets/FilterDate.gif';

export const FilterDateHelp = [
  <h3 key={"date-filter-title"}>Выбор даты</h3>,
  <ul key={"date-filter-list"}>
    <li key={"date-1"}>1. Нажмите форму выбора даты</li>
    <li key={"date-2"}> <span style={{color: 'red'}}>Важно!</span> Данные в форме ограничены текущим днем</li>
    <li key={"date-3"}>2. Выберите дату начала (записи с временем создания начиная с этой даты)</li>
    <li key={"date-4"}>3. Выберите дату окончания (записи с временем создания до этой даты)</li>
  </ul>,
  <img key={"date-filter-gif"} style={{width: '100%', maxWidth: '748px'}} src={FilterDate} className="center-block"/>
];
