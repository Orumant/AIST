import React from 'react';
import PageNavigation from "./PageNavigation";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./style";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class ReorderTest extends React.Component {

  state = {
    tests: [],
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    const {tests} = this.state;

    this.setState({
      tests: arrayMove(tests, oldIndex, newIndex),
    });
  };

  componentDidMount() {
    const {tests} = this.props;
    console.log(tests)
    this.setState({tests: tests})
  }

  getChainData = () => {
    const {tests} = this.state;
    return {tests}
  };


  render() {
    const {classes, ...handleNavigation} = this.props;
    const {tests} = this.state;

    const SortableItem = SortableElement(({value, index}) => {
      return (
        <li>
          <Card key={index} className={classes.testCard}>
            <CardContent>
              <Typography>{value.test_name}</Typography>
              <Typography color={"textSecondary"}>ID: {value.test_id}</Typography>
            </CardContent>
          </Card>
        </li>
      );
    });

    const SortableList = SortableContainer(({items}) => {
      return (
        <ul>
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value}/>
          ))}
        </ul>
      );
    });

    return [
      <div>
        Page 3
        <SortableList items={tests} onSortEnd={this.onSortEnd} />
      </div>,
      <PageNavigation chain_data={this.getChainData()} {...handleNavigation}/>
    ]
  }
}

ReorderTest.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (ReorderTest);

