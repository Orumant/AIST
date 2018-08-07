import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import AccountButton from "./UserActions/AccountButton";

class UserActions extends React.Component {

  state = {
    showHelp: false,
  };

  render() {
    const {helpForm} = this.props;
    let help = React.cloneElement(helpForm, {close: () => this.setState({showHelp: false})});
    const {showHelp} = this.state;

    return (
      <div>
        <IconButton
          onClick={()=> this.setState({showHelp: true})}
          color="inherit"
          title="Информация">
          <HelpIcon />
        </IconButton>
        <AccountButton />
        {showHelp? help : null}
      </div>
    );
  }
}

export default UserActions;

