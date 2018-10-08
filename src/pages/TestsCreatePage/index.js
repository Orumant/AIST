import React from 'react';
import PagePattern from '../_global/PagePattern';
import Help from "../ResultsPage/index/Help";
import TestMaster from "../../containers/TestsCreatePage/TestMaster";

class TestsCreatePage extends React.Component {

  render() {
    const testId = this.props.match.params.testId;

    return (
      <PagePattern title="Создание теста"
                   content={<TestMaster testId={testId}/>}
                   help={<Help/>}/>
    );
  }
}

export default TestsCreatePage;
