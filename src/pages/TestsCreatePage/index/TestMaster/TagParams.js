import React from 'react';
import {arrayToOptions, getOptionByLabel, optionsToArray} from "../../../../utils/filters/index";
import PageNavigation from "./PageNavigation";
import TestTags from "./TagParams/TestTags";
import {TagParamsInfo} from "./TagParams/TagParamsInfo";
import {styles} from "../style";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

class TagParams extends React.Component {

  state = {
    static_tags: [],
    dynamic_tags: [],
    isError: false,
  };

  changeInput = (prop, val) => {
    this.setState({[prop]: val})
  };

  getTestData = () => {
    const {static_tags, dynamic_tags} = this.state;
    return {
      static_tags: optionsToArray(static_tags),
      dynamic_tags: optionsToArray(dynamic_tags),
    }
  };

  componentWillMount() {
    this.updateData();
  }

  componentDidUpdate() {
    const {data, dataUpdated, needUpdate, isCreation} = this.props;
    if (needUpdate && (isCreation || data.test_name) && data.test_name !== this.state.test_name) {
      this.updateData();
      dataUpdated();
    }
  };

  updateData = () => {
    const {data} = this.props;
    const {static_tags, dynamic_tags} = data;
    const staticTagsList = static_tags ? arrayToOptions(static_tags) : {};
    const dynamicTagsList = dynamic_tags ? arrayToOptions(dynamic_tags) : {};
    const initialState = {
      static_tags: static_tags ? static_tags.map(item => {
        const option = getOptionByLabel(item, staticTagsList);
        return option ? option : {label: item, value: item}
      }) : [],
      dynamic_tags: dynamic_tags ? dynamic_tags.map(item => {
        const option = getOptionByLabel(item, dynamicTagsList);
        return option ? option : {label: item, value: item}
      }) : [],
    };
    this.setState(initialState);
  };

  onNext = (data) => {
    const {handleNext} = this.props;
    this.setState({isError: false});
    handleNext(data);
  };

  render() {
    const {static_tags, dynamic_tags, isError} = this.state;
    const {classes, handleNext, ...handleNavigation} = this.props;
    const item = (label, form) => <div className={'input-item-form'}>{label}{form}</div>;

    return [
      <Paper className={classes.stepContent} key={'tag-params-paper'}>
        <Grid key={'tag-params-grid-container'} container>
          <Grid key={'tag-params-grid-item'} item xs={6}>
            {item('Статические теги', <TestTags
              key={'tag-params-static'}
              tags={static_tags}
              helpText={'Введите статические теги через enter...'}
              onChange={option => this.changeInput('static_tags', option)}/>)}

            {item('Динамические теги', <TestTags
              key={'tag-params-dynamic'}
              tags={dynamic_tags}
              helpText={'Введите динамические теги через enter...'}
              onChange={option => this.changeInput('dynamic_tags', option)}/>)}
          </Grid>
          {TagParamsInfo}
        </Grid>
      </Paper>,
      <PageNavigation key={'navigation-common-data'} test_data={this.getTestData()}
                      handleNext={this.onNext} {...handleNavigation}/>
    ]
  }
}

TagParams.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(TagParams);
