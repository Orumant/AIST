import React from 'react';
import PagePattern from "../_global/PagePattern";
import TestsViewer from "../../containers/TestViewer/TestsViewer";
import TestsViewerHelp from "./help";

export default function () {
  return(
    <PagePattern title="Тесты" content={<TestsViewer/>} help={<TestsViewerHelp/>}/>
  )
}
