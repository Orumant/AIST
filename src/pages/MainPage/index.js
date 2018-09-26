import React from 'react';
import Launcher from "../../containers/Launcher";
import PagePattern from '../_global/PagePattern';
import LauncherHelp from "./help";

class MainPage extends React.Component {

  render() {

    return (
      <PagePattern title="Запуск цепочек" content={<Launcher/>} help={<LauncherHelp/>}/>
    );
  }
}

export default MainPage;
