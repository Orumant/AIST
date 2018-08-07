import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
import AccountButton from "./UserActions/AccountButton";

class UserActions extends React.Component {

  render() {
    return (
      <div>
        <IconButton color="inherit">
          <HelpIcon />
        </IconButton>
        <AccountButton />
      </div>
    );
  }
}

export default UserActions;

