import React from 'react';
import PagePattern from '../PagePattern';
import ChainEditorHelp from "../ChainEditorPage/help";
import ChainList from "../../containers/ChainsListPage";

class ChainListPage extends React.Component {

  render() {

    return (
      <PagePattern title="Реестр цепочек" content={<ChainList/>} help={<ChainEditorHelp/>}/>
    );
  }
}

export default ChainListPage;
