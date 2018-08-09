import React from 'react';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import { withStyles } from '@material-ui/core/styles';
import AccountButton from "./UserActions/AccountButton";
import Typography from '@material-ui/core/Typography';
import CreateButton from "./UserActions/CreateButton";
import {styles} from "./UserActions/style";

class UserActions extends React.Component {

  state = {
    showHelp: false,
  };

  render() {
    const {helpForm, classes} = this.props;
    let help = React.cloneElement(helpForm, {close: () => this.setState({showHelp: false})});
    const {showHelp} = this.state;

    return (
      <div>
        <CreateButton/>
        <Button
          onClick={()=> this.setState({showHelp: true})}
          color="inherit"
          title="Информация">
          <HelpIcon className={classes.accountIcon}/>
          <Typography color="inherit">Помощь</Typography>
        </Button>
        <AccountButton />
        {showHelp? help : null}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UserActions);

