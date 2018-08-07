import React from 'react';
import ResultsPage from "../../containers/Results";
import PagePattern from '../PagePattern';
import Help from "../Results/index/SearchBar/Help";

class TestResults extends React.Component {

  render() {

    return (
      <PagePattern title="Результаты" content={<ResultsPage/>} help={<Help/>}/>
    );
  }
}

export default TestResults;
