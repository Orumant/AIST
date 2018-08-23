import React from 'react';
import PageNavigation from "../PageNavigation";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "../style";
import '../style.css';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc'
import {render} from 'react-dom'
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

  componentDidUpdate() {
    const {tests} = this.props;
    let new_test = [...this.state.tests];
    if (tests.length > new_test.length) {
      tests.forEach(test => this.state.tests.indexOf(test) === -1? new_test.push(test) : null);
      this.setState({tests: new_test})
    }
    if (tests.length < new_test.length) {
      this.state.tests.forEach((test, ind) => tests.indexOf(test) === -1? new_test.splice(ind) : null);
      this.setState({tests: new_test})
    }
  }

  getChainData = () => {
    const {tests} = this.props;
    return {tests}
  };


  render() {
    const {classes} = this.props;
    const {tests} = this.state;

    const SortableItem = SortableElement(({value, ind}) => {
      return (
        <Card key={value.test_id} className={classes.testCard}>
          <CardContent className={classes.testCardContent}>
            <div className={classes.cardNumber}>
              <Typography>{ind+1}</Typography>
            </div>
            <Typography className={classes.cardContent}>{value.test_name}</Typography>
          </CardContent>
        </Card>
      );
    });

    const SortableList = SortableContainer(({items}) => {
      return (
        <ul>
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} ind={index}/>
          ))}
        </ul>
      );
    });

    return [ tests.length > 0?
      <div>
        <Typography variant="headline" style={{textAlign: 'center'}}>Порядок тестов</Typography>
        <SortableList items={tests} onSortEnd={this.onSortEnd} helperClass="sortableHelper"/>
      </div> :
      <div className={classes.emptyReorderForm}>
        <Typography variant={"headline"} style={{color: 'white'}}>Ни одного теста не выбрано</Typography>
        <br/>
        <span style={{color: 'white'}}>Для измения порядка тестов сначала выберите тесты в таблице справа</span>
      </div>
    ]
  }
}

ReorderTest.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (ReorderTest);

