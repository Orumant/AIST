import React from 'react';
import Details from '../../../../../assets/Details.gif';

export const DetailsHelp = [
  <h3 key={"details-title"}>Работа с таблицей</h3>,
  <ul key={"details-list"}>
    <li key={"show-chain-details"}>1. Для того, чтобы увидеть все прогоны цепочки, нажмите на стрелку слева от имени цепочки</li>
    <li key={"show-test-details"}>2. Для того, чтобы увидеть все тесты в прогоне, нажмите на стрелку слева от времени создания</li>
  </ul>,
  <img key={"details-gif"} style={{width: '100%', maxWidth: '1047px'}} src={Details} className="center-block"/>
];
