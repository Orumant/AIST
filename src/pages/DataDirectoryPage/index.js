import React from 'react';
import PagePattern from '../PagePattern';
import DataDirectoryTest from "../../containers/DataDirectoryTest/DataDirectoryTest";
import DataDirectoryHelp from "./help";

class DataDirectoryPage extends React.Component {

  render() {

    return (
      <PagePattern title="Справочник данных" content={<DataDirectoryTest/>} help={<DataDirectoryHelp/>}/>
    );
  }
}

export default DataDirectoryPage;
