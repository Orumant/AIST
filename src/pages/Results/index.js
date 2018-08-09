import React from 'react';
import Results from "../../containers/Results";
import PagePattern from '../PagePattern';
import Help from "../Results/index/SearchBar/Help";

class ResultsPage extends React.Component {

  render() {

    return (
      <PagePattern title="Результаты" content={<Results/>} help={<Help/>}/>
    );
  }
}

export default ResultsPage;
