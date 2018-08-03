import React from 'react';
import ColumnChooser from '../../../../../assets/ColumnChooser.gif';

export const ColumnChooserHelp = [
  <h3 key={'help-choose-column-title'}>Работа со столбцами</h3>,
  <ul key={'help-choose-column-list'}>
    <li key={"help-choose-column-1"}>1. Нажмите на иконку глаза в правом верхнем углу таблицы</li>
    <li key={"help-choose-column-2"}>2. Отметьте нужные заголовки</li>
  </ul>,
  <img key={'help-choose-column-gif'} style={{width: '100%', maxWidth: '255px'}} src={ColumnChooser} className="center-block"/>
];
