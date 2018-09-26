import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import '../style.css';
import Grid from "@material-ui/core/Grid";

class CommonDataInfo extends React.Component {

  render() {
    const{classes} = this.props;
    return [
      <Grid item xs={6}>
        <div className={'info-form'}>
          <div style={{marginTop: '24px', textAlign: 'right'}}>
            <Typography variant={'title'} style={{color: 'rgba(67, 136, 204, 0.7)'}}>Инфо</Typography>
          </div>
          <div className={'info-block'} style={{marginTop: '12px'}}>
            <Typography variant={'subheading'}>Название</Typography>
            <span>Название теста</span>
          </div>
          <div className={'info-block'} style={{marginTop: '12px'}}>
            <Typography variant={'subheading'}>АС</Typography>
            <span>Название АС</span><br/>
            <span>В случае, если вы не нашли нужную АС в списке - просьба создать
        тикет с описанием того какую АС необходимо добавить.</span><br/>
            <Button variant={'contained'} color={'primary'}
                    onClick={(e) => window.open('https://jira.ca.sbrf.ru/secure/' +
                      'CreateIssueDetails!init.jspa?pid=19902&issuetype=3&priority=3&' +
                      'customfield_17814=21315&components=46502&' +
                      'assignee=Kurnachenkov-MV&labels=%D0%90%D0%98%D0%A1%D0%A2', '_blank')}
                    className={classes.button}>Создать
              тикет</Button><br/>
          </div>
          <div className={'info-block'} style={{marginTop: '12px'}}>
            <Typography variant={'subheading'}>Контур</Typography>
            <span>Контуры, на которых будет выполняться тест</span>
            <div style={{color: '#f50057'}}>В списке отображаются контуры, доступные в АИСТ</div>
          </div>
        </div>
      </Grid>
    ]
  }
}

export default CommonDataInfo;
