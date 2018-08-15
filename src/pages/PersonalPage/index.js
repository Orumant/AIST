import React from 'react';
import PagePattern from '../global/PagePattern';
import Personal from '../../containers/PersonalPage'
import PersonalHelp from "./help";

class PersonalPage extends React.Component {

  render() {

    return (
      <PagePattern title="Личный кабинет" content={<Personal/>} help={<PersonalHelp/>}/>
    );
  }
}

export default PersonalPage;
