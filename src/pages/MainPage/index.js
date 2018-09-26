import React from 'react';
import Launcher from "../../containers/Launcher";
import PagePattern from '../_global/PagePattern';
import LauncherHelp from "./help";
import MainMenu from "./index/MainMenu";

class MainPage extends React.Component {

  render() {

    return (
      <PagePattern title="Запуск цепочек" content={<MainMenu/>} help={<LauncherHelp/>}/>
    );
  }
}

export default MainPage;
