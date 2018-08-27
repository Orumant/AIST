import React from 'react';
import PagePattern from '../_global/PagePattern';
import ChainEditor from "../../containers/ChainEditorPage";
import ChainEditorHelp from "./help";

class ChainEditorPage extends React.Component {

  render() {
    const {match} = this.props;

    return (
      <PagePattern title="Конструктор цепочек" content={<ChainEditor match={match}/>} help={<ChainEditorHelp/>}/>
    );
  }
}

export default ChainEditorPage;
