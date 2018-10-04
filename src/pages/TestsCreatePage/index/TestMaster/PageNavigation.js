import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./style";

class PageNavigation extends React.Component {

  render() {
    const { handleNext, handleBack, submit, isFirstPage, isLastPage, test_data, classes, history} = this.props;

    const nextButton = <Button variant={'contained'} color={'primary'}
                               onClick={() => handleNext(test_data)} className={classes.button}> Вперед</Button>;
    const backButton = <Button disabled={isFirstPage}
                               onClick={() => handleBack(test_data)} className={classes.button}>Назад</Button>;
    const submitButton = <Button variant={'contained'} color={'primary'}
                                 onClick={() => submit(test_data, history)} className={classes.button}>Сохранить</Button>;

    return (
      <div className={classes.navPanel}>
        {backButton}
        {isLastPage? submitButton : nextButton}
      </div>
    )
  }
}
PageNavigation.propTypes = {
  classes: PropTypes.object,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  submit: PropTypes.func,
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
  test_data: PropTypes.object,
  history: PropTypes.object,
};

export default withStyles(styles) (withRouter(PageNavigation));
