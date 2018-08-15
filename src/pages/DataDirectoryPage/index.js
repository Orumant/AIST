import React from 'react';
import PagePattern from '../_global/PagePattern';
import DataDirectoryTest from "../../containers/DataDirectoryPage/DataDirectoryTest";
import DataDirectoryHelp from "./help";

class DataDirectoryPage extends React.Component {

  render() {

    return (
      <PagePattern title="Справочник данных" content={<DataDirectoryTest/>} help={<DataDirectoryHelp/>}/>
    );
  }
}

export default DataDirectoryPage;
