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
      'passOrToken': '',
    },
    authType: 1,
    isErrorJob: false,
    isErrorLogin: false,
    isErrorPassOrToken: false,
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

  componentWillMount() {
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
    if (job_trigger.passOrToken === undefined)
      job_trigger.passOrToken = '';
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
          'passOrToken': '',
        },
    };
    this.setState(initialState);
  };

  onNext = (data) => {
    const {handleNext} = this.props;
    this.setState({isErrorJob: false, isErrorLogin: false, isErrorPassOrToken: false});
    if (this.state.job_trigger.job_url.length === 0)
      this.setState({isErrorJob: true});
    else if (this.state.authType === 0 && this.state.job_trigger.login.length === 0)
      this.setState({isErrorLogin: true});
    else if (this.state.authType === 0 && this.state.job_trigger.passOrToken.length === 0)
      this.setState({isErrorPassOrToken: true});
    else if (this.state.authType === 1 && this.state.job_trigger.passOrToken.length === 0) {
      this.setState({isErrorPassOrToken: true});
    }
    else {
      if (this.state.authType === 1) {
        const url = this.state.job_trigger.job_url;
        const passOrToken = this.state.job_trigger.passOrToken;
        data.job_trigger = {
          'job_url': url,
          'login': '',
          'passOrToken': passOrToken,
        };
      }
      this.setState({isErrorJob: false, isErrorLogin: false, isErrorPassOrToken: false});
      handleNext(data);
    }
  };

  render() {
    const {job_trigger, isErrorJob, isErrorLogin, isErrorPassOrToken, authType} = this.state;
    const {classes, handleNext, ...handleNavigation} = this.props;

    return [
      <Paper className={classes.stepContent} key={'jenkins-params-paper'}>
        <Grid key={'jenkins-params-grid-container'} container>
          <Grid key={'jenkins-params-grid-item'} item xs={6}>
            <TestJobParams
              key={'jenkins-params-job'}
              data={job_trigger}
              authType={authType}
              handleChange={this.handleChange}
              onChange={this.changeInput}
              isErrorJob={isErrorJob}
              isErrorLogin={isErrorLogin}
              isErrorPassOrToken={isErrorPassOrToken}/>
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
