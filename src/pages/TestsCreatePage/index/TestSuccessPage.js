import React from 'react';
import Help from "../../ResultsPage/index/Help";
import PagePattern from '../../_global/PagePattern';
import SuccessPageContent from "./SuccessPage/SuccessPageContent";

class TestSuccessPage extends React.Component {

  render() {

    return (
      <PagePattern title={'Создание теста'} content={<SuccessPageContent/>} help={<Help/>}/>
    )
  }
}

export default TestSuccessPage;
