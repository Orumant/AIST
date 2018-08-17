import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from "./style";
import CommonData from "./ChainMaster/CommonData";
import Paper from '@material-ui/core/Paper';
import './style.css'
import TestTable from "./ChainMaster/TestTable";
import Notifications from 'react-notification-system-redux';
import Loading from 'react-loading';


class ChainMaster extends React.Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  componentDidMount() {
    const {fetchAllData} = this.props;
    fetchAllData();
  }

  getStepContent = (step) => {
    const { templates, tests, groups} = this.props;
    console.log(templates)
    switch (step) {
      case 0:
        return <CommonData templates={templates} groups={groups}/>;
      case 1:
        return <TestTable/>;
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Unknown step';
    }
  }



  render() {
    const { classes, templates, tests, groups, isFetching,  notifications } = this.props;
    console.log(templates, tests, groups)
    const steps = ['Общие данные', 'Выбор тестов', 'Порядок запуска тестов'];
    const { activeStep } = this.state;

    const Spinner = <div className='loading'>
      <Loading key='page-content-loading' type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    return (
      <div>
        {isFetching? Spinner: null}
        <div style={{opacity: isFetching? 0.5 : 1}}>
          <div className={classes.root}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) =>
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.stepContent}>
                    All steps completed - you&quot;re finished
                  </Typography>
                  <Button onClick={this.handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div>
                  <Paper className={classes.stepContent}>{this.getStepContent(activeStep)}</Paper>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Назад
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Завершить' : 'Вперед'}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <Notifications key='results-notification' notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

ChainMaster.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (ChainMaster);
