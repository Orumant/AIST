import React from 'react';
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./style";

class TestInfo extends React.Component {

  getTestName = (test_id) => {
    const {testsAll} = this.props;
    let test_name = '';
    testsAll.forEach(test =>
      test.test_id === test_id.toString() ? test_name = test.test_name : null);
    return test_name
  };

  render() {
    const {classes, data} = this.props;
    const {tests} = data;

    return (
      <Grid item xs={12} md={6}>
        <Typography variant="title" className={classes.gridTitle}>Тесты</Typography>
        <List>
          {tests ? tests.map((test, ind) => <ListItem>
            <ListItemAvatar>
              <Avatar>
                {ind + 1}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={test.test_name? test.test_name : this.getTestName(test)}/>
          </ListItem>) : "Тесты не выбраны"}
        </List>
      </Grid>
    )
  }
}

export default withStyles(styles) (TestInfo);
