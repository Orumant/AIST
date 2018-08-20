import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { styles } from "./style";

class PageNavigation extends React.Component {

  render() {
    const { handleNext, handleBack, submit, isFirstPage, isLastPage, chain_data, classes} = this.props;

    const nextButton = <Button variant="contained" color="primary"
                               onClick={() => handleNext(chain_data)} className={classes.button}> Вперед</Button>;
    const backButton = <Button disabled={isFirstPage}
                               onClick={handleBack} className={classes.button}>Назад</Button>;
    const submitButton = <Button variant="contained" color="primary"
                                 onClick={() => submit(chain_data)} className={classes.button}>Сохранить</Button>;

    return (
      <div>
        {backButton}
        {isLastPage? submitButton : nextButton}
      </div>
    )
  }
}
PageNavigation.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (PageNavigation);
