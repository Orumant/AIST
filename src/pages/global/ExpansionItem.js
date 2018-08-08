import React from 'react'
import classNames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

class ExpansionItem extends React.Component {

  state = {
    expand: false,
  };

  handleClick = () => {
    this.setState(state => ({expand: !state.expand}));
  };

  render ()  {
    const {expand} = this.state;
    const {classes, name, elem} = this.props;
    return (
     <ExpansionPanel className={classes.root} CollapseProps={{className: classNames({[classes.container]: expand})}}>
       <ExpansionPanelSummary className={classes.rootSummary} expandIcon={<ExpandMore/>} onClick={this.handleClick}>
         {name}
       </ExpansionPanelSummary>
       <ExpansionPanelDetails className={classes.rootFilter}>
         {elem}
       </ExpansionPanelDetails>
     </ExpansionPanel>
    )
  }
}



export default withStyles(styles, {})(ExpansionItem);

