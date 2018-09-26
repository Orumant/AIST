import React from 'react';
import PageNavigation from "./PageNavigation";
import TestJobParams from "./JenkinsParams/TestJobParams";
import {JenkinsParamsInfo} from "./JenkinsParams/JenkinsParamsInfo";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

class JenkinsParams extends React.Component {

  state = {
    job_trigger: {
      'job_url': '',
      'login': '',
      'password': '',
    },
    authType: 0,
    isError: false,
  };

  changeInput = (prop, val) => {
    let temp = this.state['job_trigger'];
    temp[prop] = val;
    this.setState({job_trigger: temp})
  };

  handleChange = (event, authType) => {
    this.setState({authType})
  };

  getTestData = () => {
    const {job_trigger} = this.state;
    return {
      job_trigger: job_trigger ? job_trigger : {},
    }
  };

  componentDidMount() {
    this.updateData();
  }

  componentDidUpdate() {
    const {data, dataUpdated, needUpdate, isCreation} = this.props;
    if (needUpdate && (isCreation || data.job_trigger) && data.job_trigger !== this.state.job_trigger) {
      this.updateData();
      dataUpdated();
    }
  };

  setJobTrigger = (job_trigger) => {
    if (job_trigger.login === undefined)
      job_trigger.login = '';
    if (job_trigger.password === undefined)
      job_trigger.password = '';
    return job_trigger;
  };

  updateData = () => {
    const {data} = this.props;
    const {job_trigger} = data;
    const initialState = {
      job_trigger: job_trigger ?
        this.setJobTrigger(job_trigger) : {
          'job_url': '',
          'login': '',
          'password': '',
        },
    };
    this.setState(initialState);
  };

  onNext = (data) => {
    const {handleNext} = this.props;
    if (this.state.authType === 0 &&
      (this.state.job_trigger.login.length === 0 ||
        this.state.job_trigger.password.length === 0)) {
      this.setState({isError: true})
    }
    else {
      this.setState({isError: false});
      handleNext(data)
    }
  };

  render() {
    const {job_trigger, isError, authType} = this.state;
    const {classes, handleNext, ...handleNavigation} = this.props;
    return [
      <Paper className={classes.stepContent}>
        <Grid key={'jenkins-params-grid-container'} container>
          <Grid key={'jenkins-params-grid-item'} item xs={6}>
            <TestJobParams data={job_trigger}
                           authType={authType}
                           handleChange={this.handleChange}
                           onChange={this.changeInput}
                           isError={isError}/>
          </Grid>
          {JenkinsParamsInfo}
        </Grid>
      </Paper>,
      <PageNavigation key={'navigation-common-data'} test_data={this.getTestData()}
                      handleNext={this.onNext} {...handleNavigation}/>
    ]
  }
}

JenkinsParams.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(JenkinsParams);
