import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { styles } from "./style";
import CommonData from "./ChainMaster/CommonData";
import './style.css'
import Notifications from 'react-notification-system-redux';
import Loading from 'react-loading';
import StepContent from "@material-ui/core/es/StepContent/StepContent";
import Grid from "@material-ui/core/es/Grid/Grid";


class MainMenu extends React.Component {


  render() {
    const { classes, isFetching, notifications } = this.props;
    const steps = ['Общие данные', 'Выбор тестов', 'Создание формы', 'Подтверждение'];
    const { activeStep } = this.state;

    const Spinner = <div className='loading'>
      <Loading key='page-content-loading' type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    const getStepPage = () => React.cloneElement(this.getStepContent(activeStep),
      {
        handleNext: this.handleNext,
        handleBack:this.handleBack,
        submit: this.submit,
        isFirstPage: activeStep === 0,
        isLastPage: activeStep === steps.length - 1
      });

    return (
      <Grid container>
        <Grid item md={12} xs={12}/>
      </Grid>
    )
  }
}

MainMenu.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true }) (MainMenu);
