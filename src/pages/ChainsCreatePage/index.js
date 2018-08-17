import React from 'react';
import PagePattern from '../_global/PagePattern';
import Help from "../ResultsPage/index/Help";
import ChainMaster from "../../containers/ChainsCreatePage/ChainMaster";


class ChainsCreatePage extends React.Component {

  render() {
    return (
      <PagePattern title="Создание цепочки" content={<ChainMaster/>} help={<Help/>}/>
    );
  }
}

export default ChainsCreatePage;
