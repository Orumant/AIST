import React from 'react';
import PagePattern from '../global/PagePattern';
import Results from "../../containers/ResultsPage/Results";
import Help from "./index/Help";

class ResultsPage extends React.Component {

  render() {
    return (
      <PagePattern title="Результаты" content={<Results/>} help={<Help/>}/>
    );
  }
}

export default ResultsPage;
