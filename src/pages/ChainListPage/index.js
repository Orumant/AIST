import React from 'react';
import PagePattern from '../_global/PagePattern';
import ChainEditorHelp from "../ChainEditorPage/help";
import ChainList from "../../containers/ChainListPage/ChainsListPage";

class ChainListPage extends React.Component {

  render() {

    return (
      <PagePattern title="Цепочки" content={<ChainList/>} help={<ChainEditorHelp/>}/>
    );
  }
}

export default ChainListPage;
