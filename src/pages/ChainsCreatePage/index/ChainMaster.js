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
import SelectTest from "../../../containers/ChainsCreatePage/ChainMaster/SelectTest";
import CreateForm from "../../../containers/ChainsCreatePage/ChainMaster/CreateForm";
import Confirmation from "./ChainMaster/Confirmation";


class ChainMaster extends React.Component {

  state = {
    activeStep: 0,
    name: '',
    needUpdate: {
      commonData: false,
      tests: false,
      form: false,
    },
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

  submit = (chain_data, history) => {
    const {submitNewChainData, submitEditedChainData, chainName, isCopy} = this.props;
    if (chainName && !isCopy) submitEditedChainData(chainName, chain_data, history);
    else submitNewChainData(chain_data, history);
  };

  dataUpdated = (page) => {
    const update = {...this.state.needUpdate};
    update[page] = false;
    this.setState({needUpdate: update});
  };

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate() {
    this.updateData();
  }

  updateData = () => {
    const {fetchAllData, chainName} = this.props;
    const update = {...this.state.needUpdate};
    for (let page in update)
      update[page] = true;
    if (chainName !== this.state.name) {
      this.setState({name: chainName, needUpdate: update});
      fetchAllData(chainName);
    }
  };

  getStepContent = (step) => {
    const { dataAll, chain_data, chainName} = this.props;
    const isCreation = !Boolean(chainName);
    const {needUpdate} = this.state;
    switch (step) {
      case 0:
        return <CommonData needUpdate={needUpdate.commonData} dataUpdated={() => this.dataUpdated("commonData")}
                           data={chain_data} templatesAll={dataAll.templates} groupsAll={dataAll.groups}
                           isCreation={isCreation}/>;
      case 1:
        return <SelectTest needUpdate={needUpdate.tests} dataUpdated={() => this.dataUpdated("tests")}
                            data={chain_data} testsAll={dataAll.tests}/>;
      case 2:
        return <CreateForm needUpdate={needUpdate.form} dataUpdated={() => this.dataUpdated("form")}
                           data={chain_data}/>;
      case 3:
        return <Confirmation data={chain_data} testsAll={dataAll.tests}/>;
      default:
        return 'Произошла ошибка';
    }
  };


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
      <div>
        {isFetching? Spinner: null}
        <div style={{opacity: isFetching? 0.5 : 1}}>
          <div className={classes.root}>
            <Stepper activeStep={activeStep}>
              {steps.map((label) =>
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              )}
            </Stepper>
            {getStepPage(activeStep)}
            <Notifications key='results-notification' notifications={notifications}/>
          </div>
        </div>
      </div>
    )
  }
}

CommonData.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles) (ChainMaster);
