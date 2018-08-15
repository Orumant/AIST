import React from 'react';
import PagePattern from '../global/PagePattern';
import TestBuilderHelp from "./help";
import TestBuilder from "../../containers/TestBuilder";

class TestBuilderPage extends React.Component {

  render() {

    return (
      <PagePattern title="Конструктор тестов" content={<TestBuilder/>} help={<TestBuilderHelp/>}/>
    );
  }
}

export default TestBuilderPage;
