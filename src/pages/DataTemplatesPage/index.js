import React from 'react';
import PagePattern from '../_global/PagePattern';
import DataTemplates from "../../containers/DataTemplates";
import DataTemplatesHelp from "./help";

class DataTemplatesPage extends React.Component {

  render() {
    const {match} = this.props;

    return (
      <PagePattern title="Шаблоны" content={<DataTemplates match={match}/>} help={<DataTemplatesHelp/>}/>
    );
  }
}

export default DataTemplatesPage;
