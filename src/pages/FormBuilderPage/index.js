import React from 'react';
import PagePattern from '../_global/PagePattern';
import FormBuilderHelp from "./help";
import FormBuilder from "../../containers/FormBuilder";

class FormBuilderPage extends React.Component {

  render() {
    const {match} = this.props;

    return (
      <PagePattern title="Редактор форм" content={<FormBuilder match={match}/>} help={<FormBuilderHelp/>}/>
    );
  }
}

export default FormBuilderPage;
