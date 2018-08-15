import React from 'react';
import PagePattern from '../global/PagePattern';
import ChainEditor from "../../containers/ChainEditorPage";
import ChainEditorHelp from "./help";

class ChainEditorPage extends React.Component {

  render() {

    return (
      <PagePattern title="Конструктор цепочек" content={<ChainEditor/>} help={<ChainEditorHelp/>}/>
    );
  }
}

export default ChainEditorPage;
