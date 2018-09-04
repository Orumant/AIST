import React from 'react';
import PropTypes from 'prop-types';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import {render} from 'react-dom';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';

import { styles } from "../style";
import '../style.css';
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';


class ReorderTest extends React.Component {

  onSortEnd = ({oldIndex, newIndex}) => {
    // const {onSortTest, tests} = this.props;
    // onSortTest(arrayMove(tests, oldIndex, newIndex));
  };

  render() {
    const {classes, tests, onDelete} = this.props;
    console.log(tests)
    console.log(SortableElement)


    const SortableItem = SortableElement(({value, ind}) => {
      return (
        <Card key={value.test_id} className={classes.testCard}>
          <CardContent className={classes.testCardContent}>
            <Typography>{ind+1}</Typography>
            <Typography className={classes.cardContent}>{value.test_name}</Typography>
            <IconButton onClick={() => onDelete(ind)}>
              <ClearIcon/>
            </IconButton>
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


    return [
      tests.length > 0?
        <div style={{overflow: 'auto', height: 'calc(100% - 24px)'}}>
          <div>
            <SortableList pressDelay={200} items={tests} onSortEnd={this.onSortEnd} helperClass="sortableHelper"/>
          </div>
        </div> :
        <div className={classes.emptyReorderForm}>
          <Typography variant={"headline"} style={{color: 'white'}}>Ни одного теста не выбрано</Typography>
          <span style={{color: 'white'}}>Для измения порядка тестов сначала выберите тесты в таблице справа</span>
        </div>
    ]
  }
}

ReorderTest.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (ReorderTest);

