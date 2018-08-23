import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { styles } from "./style";
import CommonData from "./ChainMaster/CommonData";
import Paper from '@material-ui/core/Paper';
import './style.css'
import Notifications from 'react-notification-system-redux';
import Loading from 'react-loading';
import PageNavigation from "./ChainMaster/PageNavigation";
import SelectTest from "../../../containers/ChainsCreatePage/SelectTest";


class ChainMaster extends React.Component {

  state = {
    activeStep: 0,
  };

  handleNext = (chain_data) => {
    const { activeStep } = this.state;
    const { updateData } = this.props;
    this.setState({
      activeStep: activeStep + 1,
    });
    updateData(chain_data);
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  submit = (chain_data) => {
    const { updateData } = this.props;
    updateData(chain_data);
  };

  componentDidMount() {
    const {fetchAllData} = this.props;
    fetchAllData();
  }

  getStepContent = (step) => {
    const { dataAll, chain_data} = this.props;
    switch (step) {
      case 0:
        return <CommonData data={chain_data} templatesAll={dataAll.templates} groupsAll={dataAll.groups}/>;
      case 1:
        return <SelectTest testsAll={dataAll.tests}/>;
      case 2:
        return <PageNavigation />;
      default:
        return 'Произошла ошибка';
    }
  }



  render() {
    const { classes, isFetching, chain_data,  notifications } = this.props;
    const steps = ['Общие данные', 'Выбор тестов', 'Создание формы'];
    const { activeStep } = this.state;
    console.log(chain_data)

    const Spinner = <div className='loading'>
      <Loading key='page-content-loading' type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    const getStepPage = () => React.cloneElement(this.getStepContent(activeStep),
      {handleNext: this.handleNext,
        handleBack:this.handleBack,
        submit: this.submit,
        isFirstPage: activeStep === 0,
        isLastPage: activeStep === steps.length - 1});

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
            <Paper className={classes.stepContent}>{getStepPage()}</Paper>
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
