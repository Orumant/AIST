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
import StepContent from "@material-ui/core/StepContent/StepContent";


class ChainMaster extends React.Component {

  state = {
    activeStep: 0,
    id: '',
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
    const {submitNewChainData, submitEditedChainData, chainId, isCopy} = this.props;
    if (chainId && !isCopy) submitEditedChainData(chainId, chain_data, history);
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
    const {fetchAllData, chainId} = this.props;
    const update = {...this.state.needUpdate};
    for (let page in update)
      update[page] = true;
    if (chainId !== this.state.id) {
      this.setState({id: chainId, needUpdate: update});
      fetchAllData(chainId);
    }
  };

  getStepDiscription = (step) => {
    switch (step) {
      case 1:
        return "Для изменения порядка тестов удерживайте элемент секунду, а потом перетащите на нужное место";
      default:
        return '';
    }
  };

  getStepContent = (step) => {
    const { dataAll, chain_data, chainId} = this.props;
    const isCreation = !Boolean(chainId);
    const {needUpdate} = this.state;
    switch (step) {
      case 0:
        return <CommonData needUpdate={needUpdate.commonData} dataUpdated={() => this.dataUpdated("commonData")}
                           data={chain_data} chainsAll={dataAll.chainsAll} templatesAll={dataAll.templates}
                           groupsAll={dataAll.groups} isCreation={isCreation}/>;
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
            <Stepper className={classes.stepperRoot} activeStep={activeStep} orientation={"vertical"}>
              {steps.map((label) =>
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>{this.getStepDiscription(activeStep)}</StepContent>
                </Step>
              )}
            </Stepper>
            <div style={{flexGrow: '1'}}>
              {getStepPage(activeStep)}
            </div>
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

export default withStyles(styles, { withTheme: true }) (ChainMaster);
