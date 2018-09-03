import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from "./style";

class PageNavigation extends React.Component {

  render() {
    const { handleNext, handleBack, submit, isFirstPage, isLastPage, chain_data, classes} = this.props;

    const nextButton = <Button variant="contained" color="primary"
                               onClick={() => handleNext(chain_data)} className={classes.button}> Вперед</Button>;
    const backButton = <Button disabled={isFirstPage}
                               onClick={() => handleBack(chain_data)} className={classes.button}>Назад</Button>;
    const submitButton = <Button variant="contained" color="primary"
                                 onClick={() => submit(chain_data)} className={classes.button}>Сохранить</Button>;

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
  isFirstPage: PropTypes.boolean,
  isLastPage: PropTypes.boolean,
  chain_data: PropTypes.array,
};

export default withStyles(styles) (PageNavigation);
