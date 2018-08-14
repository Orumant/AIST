import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Divider from '@material-ui/core/Divider'
import Help from "../../Help";

class SearchBar extends React.Component {

  state = {
    showHelp: false,
  };

  render () {
    const {showHelp} = this.state;

    return (
      <div className={'header-title'}>
        Результаты
        <IconButton onClick={()=> this.setState({showHelp: true})} title="Информация">
          <InfoIcon/>
        </IconButton>
        <Divider/>
        {showHelp? <Help close={() => this.setState({showHelp: false})}/>: null}
      </div>
    )
  }
}

export default SearchBar
