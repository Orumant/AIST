import React from 'react';
import PagePattern from "../_global/PagePattern";
import TestsViewer from "../../containers/TestsViewer";
import TestsViewerHelp from "./help";

export default function () {
  return(
    <PagePattern title="Реестр тестов" content={<TestsViewer/>} help={<TestsViewerHelp/>}/>
  )
}
