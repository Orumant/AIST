import React from 'react';
import Group from '../../../../assets/Group.gif';

export const GroupHelp = [
  <h3 key={"group-title"}>Группировка</h3>,
  <ul key={"group-list"}>
    <li key={"group-1"}>1. Перетащите заголовок в верхнюю часть таблицы</li>
    <li key={"group-2"}>2. Нажмите на крестик справка от названия столбца для отмены группировки</li>
  </ul>,
  <img key={"group-gif"} style={{width: '100%', maxWidth: '1047px'}} alt="Group" src={Group} className="center-block"/>
];
