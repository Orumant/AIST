import React from 'react';
import Typography from "@material-ui/core/Typography";

export const CommonDataInfo =
  <div className="info-form" style={{flexBasis: "60%", maxWidth: "500px", height: "100%"}}>
    <div style={{ marginTop: "24px", textAlign: 'right'}}>
      <Typography variant="title" style={{color: "rgba(67, 136, 204, 0.7)"}}>Инфо</Typography>
    </div>
    <div style={{marginBottom: "24px"}}>
      <Typography variant="subheading">Название</Typography>
      <span>Имя цепочки используется для запуска цепочки и поиска результатов запуска.</span>
    </div>
    <div className="info-block">
      <Typography variant="subheading">Маркер</Typography>
      <span>Маркер определяет тип создаваемых цепочкой тестовых данных (Дебетовая карта, Ипотечный кредит и т.п.)</span>
    </div>
    <div className="info-block">
      <Typography variant="subheading">Группы</Typography>
      <span>Группы доступа определяют список пользователей, имеющих право на редактирование цепочки.
        Можно выбрать несколько групп. При указании группы public - цепочка доступна всем.</span>
      <div style={{color: "#f50057"}}>В списке отображаются только группы, в которые вы входите</div>
    </div>
  </div>;
