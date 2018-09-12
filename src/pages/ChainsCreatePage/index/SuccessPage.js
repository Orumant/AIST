import React from 'react';
import Help from "../../ResultsPage/index/Help";
import PagePattern from '../../_global/PagePattern';
import SuccessPageContent from "./ChainMaster/SuccessPageContent";

class SuccessPage extends React.Component {

  render() {

    return (
      <PagePattern title="Создание цепочки" content={<SuccessPageContent/>} help={<Help/>}/>
    )
  }
}

export default SuccessPage;
