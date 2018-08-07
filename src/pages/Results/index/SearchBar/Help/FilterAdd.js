import React from 'react';
import FilterAdd from '../../../../../assets/FilterAdd.gif';

export const FilterAddHelp = [
  <h3 key={"add-filter-title"}>Использование фильтров</h3>,
  <ul key={"add-filter-list"}>
    <li key={"add-1"}>1. Выберите любой фильтр в списке фильтров</li>
    <li key={"add-2"}>2. Нажмите на форму фильтра</li>
    <li key={"add-3"}>3. Выберите значение в выпадающем списке</li>
    <li key={"add-4"}>Некоторые списки поддерживают выбор нескольких значений</li>
    <li key={"add-5"}>4. Для удаления значения нажмите на крестик в правой части формы</li>
  </ul>,
  <img key={"add-filter-gif"} style={{width: '100%', maxWidth: '408px'}} src={FilterAdd} className="center-block"/>
];
