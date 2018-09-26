import React from 'react';
import Typography from "@material-ui/core/Typography";

export const CreateFormInfo =
  <div style={{width: "60%", maxWidth: "800px"}}>
    <Typography variant="headline" color="secondary">Поля отсутствуют</Typography>
    <div style={{marginTop: "16px"}}>
      <Typography> Вы можете добавить поля на форму или продолжить создание цепочки без формы. </Typography>
      <ul style={{listStyleType: "disc", paddingLeft: "24px"}}>
        <li className="ul-list-item">
          <Typography>Для того, чтобы добавить новое поле нажмите на кнопку
            <span style={{color: "#f50057"}}><b> Добавить поле</b></span>
          </Typography>
        </li>
        <li className="ul-list-item">
          <Typography>Для того, чтобы продолжить создание цепочки нажмите на кнопку
            <span style={{color: "#303f9f"}}><b> Вперед</b></span>
          </Typography>
        </li>
      </ul>

    </div>
  </div>;
