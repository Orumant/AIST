import React from 'react';
import deepPurple from "@material-ui/core/colors/deepPurple";
import Typography from "@material-ui/core/Typography";

export const CommonDataInfo =
  <div className="info-form" style={{width: "60%", maxWidth: "500px"}}>
    <div style={{ marginTop: "24px", textAlign: 'right'}}>
      <Typography variant="title" style={{color: "rgba(67, 136, 204, 0.7)"}}>Инфо</Typography>
    </div>
    <div style={{marginBottom: "24px"}}>
      <Typography variant="subheading">Название</Typography>
      <span>Просто название цепочки</span>
    </div>
    <div className="info-block">
      <Typography variant="subheading">Маркер</Typography>
      <span>Название сущности, которую генерирует цепочка</span>
    </div>
    <div className="info-block">
      <Typography variant="subheading">Группы</Typography>
      <span>Группы пользователей, которые смогут просматривать и копировать созданную цепочку</span>
      <div style={{color: "#f50057"}}>В списке отображаются только группы, в которые вы входите</div>
    </div>
  </div>
