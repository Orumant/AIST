import React from 'react';
import PagePattern from '../PagePattern';
import Results from "../../containers/Results/Results";
import Help from "./index/Help";

class ResultsPage extends React.Component {

  render() {
    return (
      <PagePattern title="Результаты" content={<Results/>} help={<Help/>}/>
    );
  }
}

export default ResultsPage;
