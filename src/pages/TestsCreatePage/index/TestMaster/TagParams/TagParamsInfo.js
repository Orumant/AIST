import React from 'react';
import Typography from "@material-ui/core/Typography";
import '../style.css';
import Grid from "@material-ui/core/Grid";

export const TagParamsInfo =
  <Grid item xs={6}>
    <div className={'info-form'}>
      <div style={{marginTop: "24px", textAlign: 'right'}}>
        <Typography variant={'title'} style={{color: 'rgba(67, 136, 204, 0.7)'}}>Инфо</Typography>
      </div>
      <div className={'info-block'}>
        <span>Теги помогают находить тесты, цепочки, в которые тесты входят, и тестовые данные.</span>
      </div>
      <div className={'info-block'}>
        <Typography variant={'subheading'}>Теги бывают двух видов:</Typography>
        <li type={'square'}>Статические: значение такого тега связывается с каждой заявкой,
          в которой присутствует данный тест как есть (напр, "Дебетовая карта")
        </li>
        <li type={'square'}>Динамические: Каждое имя тега = имени поля в objects заявки.
          При обновлении objects, значения полей json с указанными именами выносятся в теги.
          При этом имена тегов, которые подлежат обновлению, берутся из текущего теста.
        </li>
      </div>
    </div>
  </Grid>;
