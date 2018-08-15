import React from 'react';
import Launcher from "../../containers/Launcher";
import PagePattern from '../global/PagePattern';
import LauncherHelp from "./help";

class LauncherPage extends React.Component {

  render() {

    return (
      <PagePattern title="Запуск цепочек" content={<Launcher/>} help={<LauncherHelp/>}/>
    );
  }
}

export default LauncherPage;
