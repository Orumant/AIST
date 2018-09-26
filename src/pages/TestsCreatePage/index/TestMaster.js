import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {styles} from "./style";
import CommonData from "./TestMaster/CommonData";
import JenkinsParams from "./TestMaster/JenkinsParams";
import TagParams from "./TestMaster/TagParams";
import './style.css'
import Notifications from 'react-notification-system-redux';
import Loading from 'react-loading';
import Confirmation from "./TestMaster/Confirmation";

class TestMaster extends React.Component {

  state = {
    id: '',
    activeStep: 0,
    needUpdate: {
      commonData: false,
      tag_names: false,
      job_trigger: false,
    },
  };

  handleNext = (test_data) => {
    const {activeStep} = this.state;
    const {updateData} = this.props;
    this.setState({
      activeStep: activeStep + 1,
    });
    updateData(test_data);
  };

  handleBack = () => {
    const {activeStep} = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  submit = (test_data, history) => {
    const {submitNewTestData, submitEditedTestData, testId} = this.props;
    if (testId) submitEditedTestData(testId, test_data, history);
    else submitNewTestData(test_data, history);
  };

  dataUpdated = (page) => {
    const update = {...this.state.needUpdate};
    update[page] = false;
    this.setState({needUpdate: update});
  };

  componentWillMount() {
    this.updateData();
  }

  componentDidUpdate() {
    this.updateData();
  }

  updateData = () => {
    const {fetchAllData, testId} = this.props;
    const update = {...this.state.needUpdate};
    for (let page in update)
      update[page] = true;
    if (testId !== this.state.id) {
      this.setState({id: testId, needUpdate: update});
      fetchAllData(testId);
    }
  };

  getStepContent = (step) => {
    const {dataAll, test_data, testId} = this.props;
    const isCreation = !Boolean(testId);
    const {needUpdate} = this.state;
    switch (step) {
      case 0:
        return <CommonData needUpdate={needUpdate.commonData}
                           dataUpdated={() => this.dataUpdated('commonData')}
                           data={test_data} asAll={dataAll.as} standsAll={dataAll.stands}
                           isCreation={isCreation}/>;
      case 1:
        return <JenkinsParams needUpdate={needUpdate.job_trigger}
                              dataUpdated={() => this.dataUpdated('job_trigger')}
                              data={test_data}/>;
      case 2:
        return <TagParams needUpdate={needUpdate.tag_names}
                          dataUpdated={() => this.dataUpdated('tag_names')}
                          data={test_data}/>;
      case 3:
        return <Confirmation data={test_data}/>;
      default:
        return 'Произошла ошибка';
    }
  };

  render() {
    const {classes, isFetching, notifications} = this.props;
    const steps = ['Общие данные', 'Параметры Jenkins', 'Список тегов', 'Подтверждение'];
    const {activeStep} = this.state;

    const Spinner = <div key={'spinner'} className='loading'>
      <Loading key={'page-content-loading'} type='spin' color='rgb(67, 136, 204)' height='100px' width='100px'/>
    </div>;

    const getStepPage = () => React.cloneElement(this.getStepContent(activeStep),
      {
        handleNext: this.handleNext,
        handleBack: this.handleBack,
        submit: this.submit,
        isFirstPage: activeStep === 0,
        isLastPage: activeStep === steps.length - 1
      });

    return [
      <div key={'test-master-main-div'}>
        {isFetching ? Spinner : <div key={'test-master-common-data-div'}>
          <div key={'test-master-root-div'} className={classes.root}>
            <Stepper activeStep={activeStep} orientation={'vertical'} className={classes.stepperRoot}>
              {steps.map((label) =>
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )}
            </Stepper>
            <div key={'test-master-step-page-div'} style={{flexGrow: '1'}}>
              {getStepPage(activeStep)}
            </div>
            <Notifications key={'results-notification'} notifications={notifications}/>
          </div>
        </div>}
      </div>
    ]
  }
}

CommonData.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles, {withTheme: true})(TestMaster);
