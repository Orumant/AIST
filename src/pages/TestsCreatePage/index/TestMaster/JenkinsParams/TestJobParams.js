import React from 'react';
import TestInputJobParam from './TestInputJobParam/TestInputJobParam'
import FormControl from "@material-ui/core/FormControl";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import '../style.css';

class TestJobParams extends React.Component {
  render() {
    const {data, authType, onChange, handleChange, isError} = this.props;
    const item = (label, form) => <div className={'input-item-form'}>{label}{form}</div>;
    return (
      <FormControl fullWidth error={isError} key={'jenkins-params-job-form-control'}>
        <Tabs
          key={'jenkins-params-job-tabs'}
          value={authType}
          onChange={handleChange}
          indicatorColor={'primary'}
          textColor={'primary'}
        >
          <Tab key={'jenkins-params-job-tab1'} label={'Авторизация по логину/паролю'}>
          </Tab>
          <Tab key={'jenkins-params-job-tab2'} label={'Авторизация по токену'}>
          </Tab>
        </Tabs>
        {item('URL Job', <TestInputJobParam
          key={'jenkins-params-job-url-job'}
          value={data.job_url}
          help={'URL адрес должен быть валидным'}
          onChange={e => onChange('job_url', e.target.value)}/>)}
        {authType === 0 &&
        item('Логин Jenkins*',
          <TestInputJobParam
            key={'jenkins-params-job-login'}
            value={data.login}
            help={'Логин не может быть пустым'}
            onChange={e => onChange('login', e.target.value)}
            isError={isError}/>)}
        {authType === 0 &&
        item('Пароль Jenkins*',
          <TestInputJobParam
            key={'jenkins-params-job-paassword'}
            value={data.passOrToken}
            help={'Пароль не может быть пустым'}
            onChange={e => onChange('passOrToken', e.target.value)}
            type={'password'}
            isError={isError}/>)}
      </FormControl>
    )
  }
}

export default TestJobParams;
