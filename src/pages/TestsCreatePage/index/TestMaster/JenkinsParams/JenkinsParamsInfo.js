import React from 'react';
import Typography from "@material-ui/core/Typography";
import '../style.css';
import Grid from "@material-ui/core/Grid";

export const JenkinsParamsInfo =
  <Grid item xs={6}>
  <div className={'info-form'}>
    <div style={{marginTop: '24px', textAlign: 'right'}}>
      <Typography variant={'title'} style={{color: 'rgba(67, 136, 204, 0.7)'}}>Инфо</Typography>
    </div>
    <div className={'info-block'} style={{marginBottom: '24px'}}>
      <Typography variant={'subheading'}>URL Job</Typography>
      <span>URL адрес джобы в Jenkins. Адрес должен быть валидным</span>
    </div>
    <div className={'info-block'}>
      <Typography variant={'subheading'}>Логин/Пароль Jenkins</Typography>
      <span>При выборе способа авторизации по логину/паролю <br/>
        проводится тестовая авторизация с указанными значениями.<br/>
      Будьте внимательны при заполнении данных полей.</span>
      <div style={{color: '#f50057'}}>В случае некорректных данных запись о тесте добавлена не будет!</div>
    </div>
  </div>
  </Grid>;
